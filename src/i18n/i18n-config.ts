export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'vi'],
};

export const dir = (locale: string) => (locale === 'ar' ? 'rtl' : 'ltr');
