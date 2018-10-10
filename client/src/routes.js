import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Logout from "./components/Logout/Logout";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddMeetUp from "./components/AddMeetUp/AddMeetUp";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About
  }
];

const adminRoutes = [
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/addMeetup",
    component: AddMeetUp
  },
  {
    path: "/logout",
    component: Logout
  }
];
export { routes, adminRoutes };
