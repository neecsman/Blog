import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData";
import { SidebarItemType } from "../types/SidebarItemType";
import { RouterPath } from "shared/config/routeConfig/routerConfig";
import MainIcon from "shared/assets/icons/home.svg";
import ArticlesIcon from "shared/assets/icons/article.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import AboutIcon from "shared/assets/icons/info.svg";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RouterPath.main,
      text: "route.main",
      Icon: MainIcon,
    },
    {
      path: RouterPath.articles,
      text: "route.articles",
      Icon: ArticlesIcon,
    },
    {
      path: RouterPath.about,
      text: "route.about",
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push({
      path: RouterPath.profile,
      text: "route.profile",
      Icon: ProfileIcon,
    });
  }

  return sidebarItemsList;
});
