import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import { useSelector } from "react-redux";
import { Avatar, Button, Input, Select, Text } from "shared/ui";

import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoadiong } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";

import style from "./ProfileCard.module.scss";
import { TextSize, TextVariant } from "shared/ui/Text/Text";
import { ColorScheme } from "shared/ui/Button/Button";
import { useState } from "react";
import { OptionType } from "shared/ui/Select/Option";

interface ProfileCardProps {
  className?: string;
}

const options = [
  { value: "one", title: "One" },
  { value: "two", title: "Two" },
  { value: "Three", title: "Three" },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<OptionType>();

  const onChangeSelect = (value: OptionType) => {
    setSelected(value);
  };

  return (
    <div className={classNames(style.ProfileCard, {}, [className])}>
      <div className={style.ProfileCard_header}>
        <Avatar
          src="https://sun1-16.userapi.com/s/v1/ig2/hAR2CYE6ofvtRmkzAl76-slcxdpVHtJo_k44pv3ARZrTE6swODlXQ_YTtFx24uQ7L106g8OkyftKxtvjmaVdAc4O.jpg?size=200x200&quality=96&crop=129,226,1240,1240&ava=1"
          alt="Avatar"
        />
        <Text size={TextSize["XL"]}>Никита Колесников</Text>
      </div>
      <div className={style.ProfileCard_body}>
        <div className={style.ProfileCard_body_line}>
          <Input label={"Имя"} defaultValue={"Колесников"} />
          <Input label={"Фамилия"} defaultValue={"Никита"} />
        </div>
        <div className={style.ProfileCard_body_line}>
          <Input label={"Имя"} defaultValue={"Колесников"} />
          <Input label={"Фамилия"} defaultValue={"Никита"} />
        </div>
        <div className={style.ProfileCard_body_line}>
          <Select
            label={"Город"}
            options={options}
            value={selected}
            onChange={onChangeSelect}
          />
        </div>
        <div className={style.ProfileCard_body_line_one}>
          <Input label={"Никнейм"} defaultValue={"Neecsman"} />
        </div>
        <div className={style.ProfileCard_body_line}>
          <Button isDisabled colorScheme={ColorScheme.WHITE}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
