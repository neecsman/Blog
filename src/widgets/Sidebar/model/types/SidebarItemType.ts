import { RouterPath } from "shared/config/routeConfig/routerConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/info.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RouterPath.main,
    text: "route.main",
    Icon: MainIcon,
  },
  {
    path: RouterPath.about,
    text: "route.about",
    Icon: AboutIcon,
  },
  {
    path: RouterPath.profile,
    text: "route.profile",
    Icon: ProfileIcon,
  },
];
