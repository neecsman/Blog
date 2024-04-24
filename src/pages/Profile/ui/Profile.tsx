import { useEffect } from "react";

import { classNames } from "helpers";

import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";

import { profileReducer } from "features/Profile";
import { fetchProfileData } from "features/Profile";

import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { EditableProfileCard } from "features/Profile/";

import style from "./Profile.module.scss";
import { Page } from "shared/ui";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(style.Profile, {}, [className])}>
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
};
export default Profile;
