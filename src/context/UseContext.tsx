import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface QuizState {
  lat: string;
  lng: string;
  status: 'loading' | 'ready' | 'active' | 'finished';
 
}

type QuizAction =
  | { type: 'dataReceived'; payload: { lat: string; lon: string } }
  | { type: 'unknown' };

interface QuizContextType {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  lat: '',
  lng: '',
  status: 'loading',

};
console.log(initialState, 'inintasl');


function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'dataReceived':
      const { lat, lon } = action.payload; 
      return {
        ...state,
        lat: lat,
        lng: lon,
      };

    default:
      throw new Error('Unknown action type');
  }
}

function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz(): QuizContextType {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

export { QuizProvider, useQuiz };
