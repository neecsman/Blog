import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "helpers";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import PageLoader from "widgets/PageLoader/ui/PageLoader";

import "./styles/index.scss";
import { useAppDispatch } from "./providers/StoreProvider/config/store";
import { userActions } from "entities/User";

const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
