import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Input, Text } from "shared/ui";

import { loginActions, loginReducer } from "../..//model/slice/loginSlice";
import { loginByUsername } from "features/Auth/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";

import { classNames } from "helpers";

import style from "./LoginForm.module.scss";
import {
  getLoginStateError,
  getLoginStateIsLoading,
  getLoginStateUsername,
  getLoginStatePassword,
} from "features/Auth/AuthByUsername/model/selectors";

import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { ColorScheme } from "shared/ui/Button/Button";
interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation("auth");
  const appDispatch = useAppDispatch();

  const username = useSelector(getLoginStateUsername);
  const password = useSelector(getLoginStatePassword);
  const error = useSelector(getLoginStateError);
  const isLoading = useSelector(getLoginStateIsLoading);

  const onChangeUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      appDispatch(loginActions.setUsername(value));
    },
    [appDispatch]
  );

  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      appDispatch(loginActions.setPassword(value));
    },
    [appDispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await appDispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [appDispatch, password, username]);

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
        {error && <Text>{error}</Text>}
        <Button
          colorScheme={ColorScheme.BLUE}
          onClick={onLoginClick}
          isLoading={isLoading}
        >
          {t("Sign in")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
export default LoginForm;
