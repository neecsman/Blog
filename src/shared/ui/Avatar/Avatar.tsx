import { classNames } from "helpers";
import { memo } from "react";

import style from "./Avatar.module.scss";

import Female from "../../assets/img/female.png";
import Male from "../../assets/img/male.png";
import { Gender } from "entities/Profile/model/types/profile";
interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  gender: Gender;
}

const Avatar: React.FC<AvatarProps> = memo(
  ({ className, src, alt = "Avatar", gender }) => {
    return (
      <div className={classNames(style.Avatar, {}, [className])}>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <img src={gender === Gender.MALE ? Male : Female} alt={alt} />
        )}
      </div>
    );
  }
);
export default Avatar;
