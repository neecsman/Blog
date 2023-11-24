import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { LazyAbout } from "pages/About/LazyAbout";
import { LazyMain } from "pages/Main/LazyMain";
import { classNames } from "helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Routes>
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/" element={<LazyMain />} />
      </Routes>
    </div>
  );
};

export default App;
