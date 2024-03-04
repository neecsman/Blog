import { classNames } from "helpers";
import style from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, src, alt }) => {
  return (
    <div className={classNames(style.Avatar, {}, [className])}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default Avatar;
