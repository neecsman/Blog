import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RouterPath } from "shared/config/routeConfig/routerConfig";

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RouterPath.main} state={{ from: location }} />;
  }

  return children;
};

export default ProtectRoute;
