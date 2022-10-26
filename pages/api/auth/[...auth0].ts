import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();

//creates  following routes
// /api/auth/login -> route used to perform login with Auth0
// /api/auth/logout -> route used to log user out
// /api/auth/callback -> route Auth0 will redirect user to after successful login
// /api/auth/me -> route to fetch user profile from
