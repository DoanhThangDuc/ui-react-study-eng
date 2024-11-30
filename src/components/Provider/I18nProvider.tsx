'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export default function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Ensure the language is set and the namespace is loaded
    i18n.changeLanguage(locale).then(() => {
      i18n.loadNamespaces('homepage').then(() => {
        setIsInitialized(true);
      });
    });
  }, [locale]);

  if (!isInitialized) {
    return <div>Loading...</div>; // Prevent rendering until i18n is ready
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
