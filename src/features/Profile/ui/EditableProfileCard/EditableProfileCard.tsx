import { ChangeEvent, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { compareObjects } from "helpers";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoadiong } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileFormData } from "../../model/selectors/getProfileFormData/getProfileFormData";
import { ProfileCard } from "entities/Profile";

import { profileActions } from "../../model/slice/profileSlice";
import { fetchEditProfile } from "../../model/api/fetchEditProfile/fetchEditProfile";

interface ProfileCardProps {
  className?: string;
}

const EditableProfileCard: React.FC<ProfileCardProps> = memo(() => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getProfileIsLoadiong);
  const error = useSelector(getProfileError);
  const data = useSelector(getProfileData);
  const formData = useSelector(getProfileFormData);

  const isEditable = compareObjects(data, formData);

  const { t } = useTranslation();

  const onChangeFirstname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(profileActions.updateProfile({ firstname: value || "" }));
  }, []);

  const onChangeLastname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(profileActions.updateProfile({ lastname: value || "" }));
  }, []);

  const onChangeGender = useCallback((value: string) => {
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

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(profileActions.updateProfile({ username: value || "" }));
  }, []);

  const onEditProfile = () => {
    formData && dispatch(fetchEditProfile(formData));
  };

  return (
    <ProfileCard
      data={formData}
      error={error}
      isLoading={isLoading}
      isEditable={isEditable}
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeGender={onChangeGender}
      onChangeBirthday={onChangeBirthday}
      onChangeNickname={onChangeNickname}
      onEditProfile={onEditProfile}
    />
  );
});
export default EditableProfileCard;
