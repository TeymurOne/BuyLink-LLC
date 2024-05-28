import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ECommerce from './pages/Dashboard/ECommerce';

import Loader from './common/Loader';
import axiosInstance from './core/lib/axios.config';
import { selectCurrentUser, setCredentials } from './features/auth/authSlice';
import ProtectedRoutes from './private/ProtectedRoutes';
import ErrorPage from './components/ErrorPage';
import Index from './pages/Home/Index';
import routes from './routes';
import PrivacyPolicy from './components/home/PrivacyPolicy/Index';
import getState from './core/helpers/cookie';
import DefaultLayout from './layout/DefaultLayout';


function App() {
  const userState = useSelector(selectCurrentUser);

  const tokenget = getState();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const userData = await axiosInstance.get('/auth/user', {
          headers: {
            Authorization: `Bearer ${tokenget}  `,
          },
        });
        dispatch(setCredentials({ ...userData.data?.data }));
      } catch (error) {
        console.error('Error  fetching user data: error', error);
      }
    };
    if (tokenget) {
      handleSubmit();
    }

    setLoading(false);
  }, [userState, tokenget]);

  return loading ? (
    <Loader />
  ) : (
    <>
    

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route path="/*" element={<ErrorPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />

            {routes.map((route: any, index) => (
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
