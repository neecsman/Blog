import { classNames } from "helpers";
import { memo } from "react";

import style from "./Avatar.module.scss";

import Female from "../../assets/img/female_person.png";
import Male from "../../assets/img/male_person.png";
interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  gender: "male" | "female";
}

const Avatar: React.FC<AvatarProps> = memo(
  ({ className, src, alt = "Avatar", gender }) => {
    return (
      <div className={classNames(style.Avatar, {}, [className])}>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <img src={gender === "male" ? Male : Female} alt={alt} />
        )}
      </div>
    );
  }
);
export default Avatar;
