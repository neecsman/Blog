import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Input } from "shared/ui";

import { loginActions, loginReducer } from "../..//model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services";
import { useAppDispatch } from "helpers/hooks/useAppDispatch";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";

import { classNames } from "helpers";

import style from "./LoginForm.module.scss";
import { getLoginStateUsername } from "../../model/selectors/getLoginStateUsername";
import { getLoginStatePassword } from "../../model/selectors/getLoginStatePassword";
import { getLoginStateError } from "../../model/selectors/getLoginStateError";
import { getLoginStateIsLoading } from "../../model/selectors/getLoginStateIsLoading";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const username = useSelector(getLoginStateUsername);
  const password = useSelector(getLoginStatePassword);
  const error = useSelector(getLoginStateError);
  const isLoading = useSelector(getLoginStateIsLoading);

  const onChangeUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    appDispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(style.LoginForm, {}, [className])}>
        <Input
          autoFocus
          type="text"
          onChange={onChangeUsername}
          value={username}
        />
        <Input type="password" onChange={onChangePassword} value={password} />
        {error && <span>{error}</span>}
        <Button onClick={onLoginClick}>{t("Sign in")}</Button>
      </div>
    </DynamicModuleLoader>
  );
});
export default LoginForm;
