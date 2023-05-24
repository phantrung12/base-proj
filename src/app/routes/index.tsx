import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { path } from './path';
import Home from '../pages/Home';
import Login from '../pages/Auth';
import PrivateRoute from '../components/HOC/PrivateRoute';
import AlertDemo from '../pages/Alert';
import ButtonDemo from '../pages/Button';
import UIKit from '../pages/UIKit';
import NotificationDemo from '../pages/Notification';
import Form from '../pages/Form';
import CreateForm from '../pages/Form/containers/Create';
import UpdateForm from '../pages/Form/containers/Update';
import DetailForm from '../pages/Form/containers/Detail';
import ModalDemo from '../pages/Modal';

// export default function Routes() {
//   return useRoutes([
//     {
//       path: path.home,
//       element: (
//         <PrivateRoute>
//           <Home />
//         </PrivateRoute>
//       ),
//       children: [
//         { path: path.path1, element: <UIKit /> },
//         { path: path.path2, element: <>Path 2</> },
//         { path: path.path3, element: <>Path 3</> },
//         { path: path.subPath1.alert, element: <AlertDemo /> },
//         { path: path.subPath1.button, element: <ButtonDemo /> },
//       ],
//     },
//     {
//       path: path.login,
//       element: <Login />,
//     },
//     { path: path.all, element: <Navigate to={path.home} /> },
//   ]);
// }

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route element={<UIKit />}>
          <Route
            path={path.all}
            element={<Navigate to={path.subPath1.button} replace />}
          />
          <Route path={path.subPath1.button} element={<ButtonDemo />} />
          <Route path={path.subPath1.alert} element={<AlertDemo />} />
          <Route
            path={path.subPath1.notification}
            element={<NotificationDemo />}
          />
          <Route
            path={path.subPath1.modal}
            element={<ModalDemo />}
          />
        </Route>
        <Route path={path.form} element={<Form />} />
        <Route path={path.createForm} element={<CreateForm />} />
        <Route path={path.updateForm} element={<UpdateForm />} />
        <Route path={path.detailForm} element={<DetailForm />} />
        <Route path={path.path2} element={<>Path 2</>} />
        <Route path={path.path3} element={<>Path 3</>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
