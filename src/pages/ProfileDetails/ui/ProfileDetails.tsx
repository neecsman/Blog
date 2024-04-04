import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ProfileDetails.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { fetchProfileDataById } from "features/Profile/model/api/fetchProfileDataById/fetchProfileDataById";
import { useSelector } from "react-redux";
import { getProfileData } from "features/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoadiong } from "features/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "features/Profile/model/selectors/getProfileError/getProfileError";
import { ProfileCard } from "entities/Profile";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { profileReducer } from "features/Profile";

interface ProfileDetailsProps {
  className?: string;
}

const redicers: ReducersList = {
  profile: profileReducer,
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ className }) => {
  const { t } = useTranslation();

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoadiong);
  const error = useSelector(getProfileError);

  if (!id) {
    return null;
  }

  useEffect(() => {
    dispatch(fetchProfileDataById(id));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={redicers} removeAfterUnmount>
      <div className={classNames(style.profileDetails, {}, [className])}>
        <ProfileCard
          data={profile}
          isLoading={isLoading}
          error={error}
          isReadonly
        />
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfileDetails;
