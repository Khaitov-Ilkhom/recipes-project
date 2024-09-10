import {useRoutes} from "react-router-dom";
import {SuspenseElement as Suspense} from "../utils";
import {lazy, LazyExoticComponent} from "react";

const Home = lazy(() => import("./home/Home.tsx"))
const Details = lazy(() => import("./details/Details.tsx"))
const Liked = lazy(() => import("./liked/Liked.tsx"))

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "details/:id",
      element: <Suspense><Details/></Suspense>
    },
    {
      path: "liked",
      element: <Suspense><Liked/></Suspense>
    }
  ])
};

export default RouteController;
