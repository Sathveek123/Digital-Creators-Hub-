import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'te'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Matcher ignoring `/_next`, `/api`, `/assets`, favicon.ico, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
