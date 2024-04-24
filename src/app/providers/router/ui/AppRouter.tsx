import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import {
  AppRouteProps,
  AppRoutes,
  routeConfig,
} from "shared/config/routeConfig/routerConfig";
import PageLoader from "widgets/PageLoader/ui/PageLoader";
import ProtectRoute from "./ProtectRoute";

const AppRouter = () => {
  const renderWithProtect = (route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.protected ? <ProtectRoute>{element}</ProtectRoute> : element
        }
      />
    );
  };

  return <Routes>{Object.values(routeConfig).map(renderWithProtect)}</Routes>;
};

export default AppRouter;
