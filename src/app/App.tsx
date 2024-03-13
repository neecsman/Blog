import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "helpers";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import PageLoader from "widgets/PageLoader/ui/PageLoader";

import "./styles/index.scss";
import { useAppDispatch } from "./providers/StoreProvider/config/store";
import { getUserInited, userActions } from "entities/User";
import { useSelector } from "react-redux";

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
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
