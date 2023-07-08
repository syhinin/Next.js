export { default } from "next-auth/middleware";

//Tips. Matcher should contain list of private routes, using :path* we making our all dynamic routes a private
export const config = { matcher: ["/profile", "/protected:path*"] };
