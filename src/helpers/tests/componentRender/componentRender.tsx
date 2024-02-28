import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

const componentRender = (
  component: React.ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = "/", initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export default componentRender;
