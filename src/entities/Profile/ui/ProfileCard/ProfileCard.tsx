import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import { useSelector } from "react-redux";
import { Text } from "shared/ui";

import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoadiong } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";

import style from "./ProfileCard.module.scss";
import { TextVariant } from "shared/ui/Text/Text";

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoadiong);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(style.ProfileCard, {}, [className])}>
      <Text variant={TextVariant.HEADING}>{t("profile.title")}</Text>
    </div>
  );
};
export default ProfileCard;
