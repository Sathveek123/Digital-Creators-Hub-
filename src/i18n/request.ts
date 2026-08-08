import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate and fallback to default
  if (!locale || !['en', 'te'].includes(locale)) {
    locale = 'en';
  }

  console.log('[next-intl request] Successfully resolved config for locale:', locale);
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
