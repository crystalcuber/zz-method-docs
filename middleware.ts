export { middleware } from "nextra/locales";

// We use this for Nextra's i18n https://nextra.site/docs/guide/i18n
export const config = {
  // Matcher ignoring `/api`, `/_next` and `/assets`
  // matcher: [
  //   '/((?!api|_next/static|_next/image|assets|favicon.ico|favicon.png|icon.svg|apple-icon.png|manifest|robots.txt).*)'
  // ]
  // TODO: for whatever reason, since Aug 15th 2025, the i18n middleware is using up a ton of Vercel's Fluid Active CPU
  // Might be because I upgraded the Node.js version from 18 to 22 on Vercel at around that time
  // Anyway let's redirect zzmethod.com to zzmethod.com/en or whatever the locale is, but not redirect anything else
  matcher: ["/"],
};
