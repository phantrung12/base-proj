import { Navigate, useRoutes } from 'react-router-dom';
import { path } from './path';
import Home from '../pages/Home';
import Login from '../pages/Auth';
import PrivateRoute from '../components/HOC/PrivateRoute';

export default function Routes() {
  return useRoutes([
    {
      path: path.home,
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      children: [{ path: path.contact, element: <Login /> }],
    },
    {
      path: path.login,
      element: <Login />,
    },
    { path: path.all, element: <Navigate to={path.home} /> },
  ]);
}
