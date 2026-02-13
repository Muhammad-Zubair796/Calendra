import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server';
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/admin(.*)']);
export default clerkMiddleware(async (auth, req) => {
  // 2. If the user is trying to access a protected route, make them sign in
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};