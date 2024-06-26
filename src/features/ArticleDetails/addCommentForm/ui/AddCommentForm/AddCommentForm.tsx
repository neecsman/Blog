import { useTranslation } from "react-i18next";
import { classNames } from "helpers";

import style from "./AddCommentForm.module.scss";
import { Button, Textarea } from "shared/ui";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentSelectors";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { ColorScheme } from "shared/ui/Button/Button";

import { memo } from "react";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm: React.FC<AddCommentFormProps> = memo(
  ({ className, onSendComment }) => {
    const { t } = useTranslation("article-details");
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    };

    const onSendCommentHandler = () => {
      onSendComment(text || "");
      onCommentTextChange("");
    };

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(style.addCommentForm, {}, [className])}>
          <Textarea
            value={text}
            onChange={(e) => onCommentTextChange(e.target.value)}
            placeholder={t("comments.textarea.placeholder")}
            rows={3}
          />

          {text && text?.length > 0 && (
            <Button
              onClick={onSendCommentHandler}
              isDisabled={text?.length == 0}
              colorScheme={ColorScheme.BLUE}
            >
              {t("comments.send")}
            </Button>
          )}
        </div>
      </DynamicModuleLoader>
    );
  }
);
export default AddCommentForm;
