import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import { useSelector } from "react-redux";
import { Avatar, Button, Input, Loader, Select, Text } from "shared/ui";

import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoadiong } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";

import style from "./ProfileCard.module.scss";
import { TextSize } from "shared/ui/Text/Text";
import { ColorScheme } from "shared/ui/Button/Button";
import { ChangeEvent, useCallback, useState } from "react";
import { OptionType } from "shared/ui/Select/Option";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { profileActions } from "entities/Profile/model/slice/profileSlice";

interface ProfileCardProps {
  className?: string;
}

const genderOptions = [
  { value: "male", title: "Мужской" },
  { value: "famale", title: "Женский" },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getProfileIsLoadiong);
  const error = useSelector(getProfileError);
  const data = useSelector(getProfileData);

  const { t } = useTranslation();

  const onChangeFirstname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(profileActions.updateProfile({ firstname: value || "" }));
  }, []);

  const onChangeLastname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(profileActions.updateProfile({ lastname: value || "" }));
  }, []);

  const onChangeGender = useCallback((value: OptionType) => {
    dispatch(profileActions.updateProfile({ gender: value || "" }));
  }, []);

  const onChangeBirthday = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const birthday = value.split(".");
    const day = birthday[0];
    const month = birthday[1];
    const year = birthday[2];

    dispatch(
      profileActions.updateProfile({ birthday: { day, month, year } || "" })
    );
  }, []);

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
          <Input label={"Имя"} value={firstname} onChange={onChangeFirstname} />
          <Input
            label={"Фамилия"}
            value={lastname}
            onChange={onChangeLastname}
          />
        </div>

        <div className={style.ProfileCard_body_line}>
          <Select
            label={"Пол"}
            options={genderOptions}
            value={gender}
            onChange={onChangeGender}
            defaultValue={gender}
            placeholder="Укажите пол"
          />
          <Input
            label={"Дата рождения"}
            value={`${day}.${month}.${year}`}
            onChange={onChangeBirthday}
          />
        </div>
        <div className={style.ProfileCard_body_line_one}>
          <Input label={"Никнейм"} defaultValue={username} />
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
