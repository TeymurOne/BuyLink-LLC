import  { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';

import Loader from './common/Loader';
import axiosInstance from './core/lib/axios.config';
import { selectCurrentUser, setCredentials } from './features/auth/authSlice';
import ProtectedRoutes from './private/ProtectedRoutes';
import ErrorPage from './components/ErrorPage';
import Index from './components/PageIndex/Index';
import routes from './routes';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const dispatch = useDispatch();
  const userState = useSelector(selectCurrentUser);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const handleSubmit = async () => {
        try {
          const userData = await axiosInstance.get('/auth/user');
          
          dispatch(setCredentials(userData.data));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      if (userState === null) {
        handleSubmit();
      }
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<ErrorPage />} />
     
     
        <Route element={<ProtectedRoutes />}>
  
          
          <Route path="/admin" element={<DefaultLayout />}>
       
          
            {/* <Route index element={<ECommerce />} /> */}

             {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense fallback={<Loader />}>
                    <route.component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
