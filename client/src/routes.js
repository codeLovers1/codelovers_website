import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Registration from "./pages/Registration/Registration";
import Logout from "./components/Logout/Logout";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About
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
