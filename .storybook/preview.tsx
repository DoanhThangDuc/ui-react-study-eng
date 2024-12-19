import type { Preview } from "@storybook/react";
import { roboto } from "../src/assets/fonts";
import i18n from "../src/i18n/i18n";
import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  i18n.changeLanguage(locale);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

i18n.on("languageChanged", (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className={roboto.className}>
        {withI18next(Story, context)}
      </div>
    ),
  ],
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en", 
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "vi", title: "Vietnamese" },
      ],
      showName: true,
    },
  },
};

export default preview;
