import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "helpers";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import PageLoader from "widgets/PageLoader/ui/PageLoader";

import { useAppDispatch } from "./providers/StoreProvider/config/store";
import { getUserInited, userActions } from "entities/User";
import { useSelector } from "react-redux";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="layout">
          <div className={"aside_left"}>
            <Sidebar />
          </div>
          <div className={"content"}>{inited && <AppRouter />}</div>
          <div className={"aside_right"}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
