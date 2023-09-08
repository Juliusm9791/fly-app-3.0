import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../src/firebase-config';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('credentials ', credentials);
        console.log('req ', req);
        try {
          let rez = null;
          switch (req.query.prompt) {
            case 'login':
              rez = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              break;
            case 'signin':
              rez = await createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              break;
            default:
              break;
          }

          if (rez) {
            return rez.user;
          }
          return null;
        } catch (error) {
          console.log(error.code);
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
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(authOptions);
