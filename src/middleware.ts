import { NextRequest } from 'next/server';
import { i18n } from './i18n/i18n-config';
import { i18nRouter } from 'next-i18n-router';

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  console.log(`Middleware triggered for: ${pathname}`);

  // Use i18nRouter for automatic redirection
  const response = i18nRouter(request, i18n);

  if (pathname === '/') {
    console.log('Redirecting to default locale:', i18n.defaultLocale);
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|locales|static|.*\\..*).*)'],
};
