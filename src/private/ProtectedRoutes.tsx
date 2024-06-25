import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentToken } from '../features/auth/authSlice';

const cookieString = document.cookie;

const cookies = cookieString.split(';');
let myToken: any = null;

for (const cookie of cookies) {
  const [cookieName, cookieValue] = cookie.split('=');
  if (cookieName === 'token') {
    myToken = cookieValue;
  }
}

const ProtectedRoutes = () => {
  const token = useSelector(selectCurrentToken);

  return token || myToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
