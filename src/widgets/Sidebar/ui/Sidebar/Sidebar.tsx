import { classNames } from "helpers/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
