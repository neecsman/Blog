import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "helpers";

import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { fetchProfileData, profileReducer } from "entities/Profile";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";

import style from "./Profile.module.scss";
import ProfileCard from "entities/Profile/ui/ProfileCard/ProfileCard";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  console.log("Page render");

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.Profile, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
export default Profile;
