import { useTranslation } from "react-i18next";
import { classNames } from "helpers";

import style from "./Profile.module.scss";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { profileReducer } from "entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.Profile, {}, [className])}>
        PROFLIE PAGE
      </div>
    </DynamicModuleLoader>
  );
};
export default Profile;
