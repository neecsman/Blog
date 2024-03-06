import { ChangeEvent, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "helpers";

import { TextSize } from "shared/ui/Text/Text";
import { ColorScheme } from "shared/ui/Button/Button";
import { Avatar, Button, Input, Loader, Select, Text } from "shared/ui";

import { Profile } from "entities/Profile/model/types/profile";

import style from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  error?: string;
  data?: Profile;
  isLoading?: boolean;
  isReadonly?: boolean;
  isEditable?: boolean;
  onChangeFirstname?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeLastname?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthday?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeNickname?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeGender?: (e: string) => void;
  onEditProfile?: () => void;
}

const genderOptions = [
  { value: "male", title: "Мужской" },
  { value: "famale", title: "Женский" },
];

const ProfileCard: React.FC<ProfileCardProps> = memo((props) => {
  const { t } = useTranslation();
  const {
    className,
    isLoading,
    isReadonly,
    isEditable,
    error,
    data,
    onChangeFirstname,
    onChangeLastname,
    onChangeGender,
    onChangeBirthday,
    onChangeNickname,
    onEditProfile,
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>{`Не удалось загрузить профиль: ${error}`}</Text>;
  }

  if (!data) {
    return <Text>{`Не удалось загрузить профиль: ${error}`}</Text>;
  }

  const { firstname, lastname, username, avatar, gender, birthday } = data;
  const { day, month, year } = birthday;

  return (
    <div className={classNames(style.ProfileCard, {}, [className])}>
      <div className={style.ProfileCard_header}>
        <Avatar src={avatar} alt="Avatar" />
        <Text size={TextSize["XL"]}>{`${firstname} ${lastname}`}</Text>
      </div>
      <div className={style.ProfileCard_body}>
        <div className={style.ProfileCard_body_line}>
          <Input
            label={"Имя"}
            value={firstname}
            onChange={onChangeFirstname}
            readOnly={isReadonly}
          />
          <Input
            label={"Фамилия"}
            value={lastname}
            onChange={onChangeLastname}
            readOnly={isReadonly}
          />
        </div>

        <div className={style.ProfileCard_body_line}>
          <Select
            label={"Пол"}
            options={genderOptions}
            value={gender}
            onChange={onChangeGender}
            placeholder="Укажите пол"
          />
          <Input
            label={"Дата рождения"}
            value={`${day}.${month}.${year}`}
            onChange={onChangeBirthday}
            readOnly={isReadonly}
          />
        </div>
        <div className={style.ProfileCard_body_line_one}>
          <Input
            label={"Никнейм"}
            value={username}
            onChange={onChangeNickname}
            readOnly={isReadonly}
          />
        </div>
        {!isReadonly && (
          <div className={style.ProfileCard_body_line}>
            <Button
              isDisabled={isEditable}
              colorScheme={ColorScheme.WHITE}
              onClick={onEditProfile}
            >
              Сохранить
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});
export default ProfileCard;
