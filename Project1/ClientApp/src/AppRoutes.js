import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Counter from "./components/Counter";
import Explorer from './components/Explorer';
import  FetchData  from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/explorer',
    requireAuth: true,
    element: <Explorer />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
