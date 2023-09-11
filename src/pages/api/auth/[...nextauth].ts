import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../firebase-config';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req: any) {
        try {
          let response: any = null;
          switch (req.query.prompt) {
            case 'login':
              response = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              const userData = await auth.currentUser?.getIdTokenResult(true);
              if (userData?.claims.email_verified) {
                break;
              }
              await sendEmailVerification(response.user);
              await signOut(auth);
              throw new Error('EMAIL NOT VERIFIED');

            case 'signup':
              response = await createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              await sendEmailVerification(response.user);
              await signOut(auth);
              response = null;
              throw 'EMAIL VERIFICATION SENT';

            default:
              break;
          }

          if (response.user) {
            return response.user;
          }
          return null;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  pages: {
    signIn: '/auth/login-test',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(authOptions);