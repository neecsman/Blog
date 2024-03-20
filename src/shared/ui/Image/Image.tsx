import { classNames } from "helpers";
import style from "./Image.module.scss";
import { memo } from "react";

interface ImageProps {
  className?: string;
  src: string | undefined;
  alt?: string;
}

const Image: React.FC<ImageProps> = memo((props) => {
  const { className, src, alt } = props;
  return (
    <div className={classNames(style.image, {}, [className])}>
      <img src={src} alt={alt} />
    </div>
  );
});
export default Image;
