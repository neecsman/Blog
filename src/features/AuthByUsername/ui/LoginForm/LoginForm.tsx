import React, { memo, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./LoginForm.module.scss";
import { Button } from "shared/ui";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginActions } from "../..//model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    // dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input autoFocus type="text" />
      <Input type="text" />
      <Button>{t("Sign in")}</Button>
    </div>
  );
});
export default LoginForm;
