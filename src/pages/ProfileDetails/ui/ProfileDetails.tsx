import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ProfileDetails.module.scss";
import { useParams, useNavigate } from "react-router-dom";
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
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData";
import { Page } from "shared/ui";

interface ProfileDetailsProps {
  className?: string;
}

const redicers: ReducersList = {
  profile: profileReducer,
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ className }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoadiong);
  const error = useSelector(getProfileError);

  if (!id) {
    return null;
  }

  if (user?.id == +id) {
    navigate("/profile");
  }

  useEffect(() => {
    dispatch(fetchProfileDataById(id));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={redicers} removeAfterUnmount>
      <Page
        className={classNames(style.profileDetails, {}, [className])}
        isLoading={isLoading}
      >
        <ProfileCard
          data={profile}
          isLoading={isLoading}
          error={error}
          isReadonly
        />
      </Page>
    </DynamicModuleLoader>
  );
};
export default ProfileDetails;
