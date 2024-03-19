import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Skeleton.module.scss";
import { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height: string | number;
  border?: string;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { className, width, height, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      style={styles}
      className={classNames(style.skeleton, {}, [className])}
    ></div>
  );
};
export default Skeleton;
