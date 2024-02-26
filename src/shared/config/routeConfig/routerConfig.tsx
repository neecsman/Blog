import { LazyAbout } from "pages/About/LazyAbout";
import { LazyMain } from "pages/Main/LazyMain";
import { NotFoundPage } from "pages/NotFound";
import { LazyProfile } from "pages/Profile";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  //last
  NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",

  //last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <LazyMain />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <LazyAbout />,
  },

  [AppRoutes.PROFILE]: {
    path: RouterPath.profile,
    element: <LazyProfile />,
  },

  //last
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
