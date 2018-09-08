import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/register",
    component: Registration
  }
];

export default routes;
