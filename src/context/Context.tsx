import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface MapState {
  lat: string;
  lng: string;
  status: 'loading' | 'ready' | 'active' | 'finished';
 
}

type MapAction =
  | { type: 'dataReceived'; payload: { lat: string; lon: string } }
  | { type: 'unknown' };

interface QuizContextType {
  state: MapState;
  dispatch: React.Dispatch<MapAction>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: MapState = {
  lat: '',
  lng: '',
  status: 'loading',

};
console.log(initialState, 'inintasl');


function reducer(state: MapState, action: MapAction): MapState {
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
