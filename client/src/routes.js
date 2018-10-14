import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Logout from "./components/Logout/Logout";

import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import AddMeetUp from "./components/AddMeetUp/AddMeetUp";

import { PrivateRoute } from "./components/Common/";

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
    path: "/admin",
    component: Admin
  }
];

const adminRoutes = [
  {
    path: "/admin/login",
    component: Login
  },
  {
    path: "/admin/signup",
    component: PrivateRoute(Signup)
  },
  {
    path: "/admin/dashboard",
    component: PrivateRoute(Dashboard)
  },
  {
    path: "/admin/addMeetup",
    component: PrivateRoute(AddMeetUp)
  },
  {
    path: "/admin/logout",
    component: Logout
  }
];
export { routes, adminRoutes };
