import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ECommerce from './pages/Dashboard/Statistics';
import Loader from './common/Loader';
import axiosInstance from './core/lib/axios.config';
import { selectCurrentUser, setCredentials } from './features/auth/authSlice';
import ProtectedRoutes from './private/ProtectedRoutes';
import ErrorPage from './components/ErrorPage';
import Index from './pages/Home/Index';
import routes from './routes';
import PrivacyPolicy from './components/home/PrivacyPolicy/Index';
import getState from './data/helpers/cookie';
import DefaultLayout from './layout/DefaultLayout';
import About from './pages/About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecondPage from './pages/WebView/SecondPage.tsx';
import ThirdPage from './pages/WebView/ThirdPage.tsx';
import FirstPage from './pages/WebView/FirstPage.tsx';

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
            Authorization: `Bearer ${tokenget}`,
          },
        });

        dispatch(setCredentials({ ...userData.data?.data }));
        const partners = userData.data?.data?.partners || [];

        localStorage.setItem('partnerIds', JSON.stringify(partners.map((partner) => partner.id)));
        const storedPartnerId = localStorage.getItem('selectedPartnerId');
        console.log(storedPartnerId)
        if (partners.length > 0) {
          const validPartner = partners.some((partner) => partner.id === Number(storedPartnerId));
          if (!storedPartnerId || !validPartner) {
            localStorage.setItem('selectedPartnerId', partners[0].id.toString());
          }
        } else {
          localStorage.removeItem('selectedPartnerId');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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
      <ToastContainer limit={1} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner/:id" element={<FirstPage />} />
        <Route path="/partner/qr/:id" element={<SecondPage />} />
        <Route path="/partner/final" element={<ThirdPage />} />
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
