import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
