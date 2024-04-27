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

import style from "./app.module.scss";

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

        <div className={style.app_layout}>
          <div className={style.aside_left}>
            <Sidebar />
          </div>
          <div className={style.content}>{inited && <AppRouter />}</div>
          <div className={style.aside_right}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
