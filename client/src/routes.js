import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Logout from "./components/Logout/Logout";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/register",
    component: Registration
  },
  {
    path: "/logout",
    component: Logout
  }
];

export default routes;
