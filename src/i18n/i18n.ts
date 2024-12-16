import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'vi'], // Supported languages
    ns: ['homepage'], // Specify the namespaces used in your app
    defaultNS: 'homepage', // Default namespace to load
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation files path
    },
    debug: false, // Enable logs for debugging
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: false, // Avoid suspense for compatibility
    },
  });

export default i18n;
