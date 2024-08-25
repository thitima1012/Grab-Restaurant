import { createBrowserRouter } from "react-router-dom";
import { Add } from "../pages/Add.jsx";
//import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Notallowed from "../pages/NotAllowed.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import UserProfilePage from "../pages/UserProfilePage.jsx";
import UserPage from "../pages/UserPage.jsx";
import Layout from "../components/Layout.jsx";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //{path: "",element: <Home />,},
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "/edit/:id",
        element: <ModOrAdminPage>
          <Edit/>
        </ModOrAdminPage>
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "notallowed",
        element: <Notallowed />,
      },
    ],
  },
]);
export default Router;
