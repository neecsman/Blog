import {
  Main,
  About,
  Profile,
  Articles,
  ArticleDetails,
  NotFoundPage,
  ProfileDetails,
} from "pages";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  protected?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  PROFILE_DETAILS = "profile_details",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  //last
  NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.PROFILE_DETAILS]: "/profile/",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/",

  //last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <About />,
  },

  [AppRoutes.PROFILE]: {
    path: RouterPath.profile,
    element: <Profile />,
    protected: true,
  },

  [AppRoutes.PROFILE_DETAILS]: {
    path: `${RouterPath.profile_details}:id`,
    element: <ProfileDetails />,
  },

  [AppRoutes.ARTICLES]: {
    path: RouterPath.articles,
    element: <Articles />,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RouterPath.article_details}:id`,
    element: <ArticleDetails />,
  },

  //last
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
