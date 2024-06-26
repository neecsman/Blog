import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { NavigateOptions, To } from "react-router-dom";
import { AxiosInstance } from "axios";

import { ArticleDetailScheme } from "entities/Article";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/Auth/AuthByUsername";
import { ArticleDeatailsCommentSchema } from "pages/ArticleDetails";
import { AddCommentFormSchema } from "features/ArticleDetails/addCommentForm";
import { ArticlePageSchema } from "pages/Articles";
import { ScrollSaveSchema } from "features/ScrollSave/model/types/ScrollSaveSchema";

export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  //async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articlesPage?: ArticlePageSchema;
  articleDetail?: ArticleDetailScheme;
  articleDetailsComments?: ArticleDeatailsCommentSchema;
  addCommentForm?: AddCommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
