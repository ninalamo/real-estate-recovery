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
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/explorer',
    requireAuth: true,
    element: <Explorer />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
