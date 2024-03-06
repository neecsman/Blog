import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "helpers";

import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";

import { profileReducer } from "features/Profile";
import { fetchProfileData } from "features/Profile";

import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { EditableProfileCard } from "features/Profile/";

import style from "./Profile.module.scss";

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
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
export default Profile;
