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
      children: [
        { path: path.path1, element: <>Path 1</> },
        { path: path.path2, element: <>Path 2</> },
        { path: path.path3, element: <>Path 3</> },
        { path: path.subPath1.itemSubPath1, element: <>Sub Path 1</> },
        { path: path.subPath1.itemSubPath2, element: <>Sub Path 2</> },
      ],
    },
    {
      path: path.login,
      element: <Login />,
    },
    { path: path.all, element: <Navigate to={path.home} /> },
  ]);
}
