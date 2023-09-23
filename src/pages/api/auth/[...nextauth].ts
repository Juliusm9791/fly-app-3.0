import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../../../firebase-config';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

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
        const citiesRef = collection(db, 'users');
        try {
          switch (req.query.prompt) {
            case 'login':
              const responseLogin: any = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              const userData = await auth.currentUser?.getIdTokenResult(true);
              if (userData?.claims.email_verified) {
                return responseLogin.user;
              }
              await sendEmailVerification(responseLogin.user);
              await signOut(auth);
              throw new Error('EMAIL NOT VERIFIED. EMAIL VERIFICATION SENT.');

            case 'signup':
              const responseSignup: any = await createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password,
              );
              await sendEmailVerification(responseSignup.user);
              await signOut(auth);
              await setDoc(doc(citiesRef, responseSignup.user.uid), {
                role: '',
                firstName: '',
                middleName: '',
                lastName: '',
                avatar: '',
                address: '',
                phone: '',
                email: responseSignup.user.email,
                createdAt: serverTimestamp(),
              });

              throw 'EMAIL VERIFICATION SENT.';

            default:
              return null;
          }
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
  callbacks: {
    async jwt({ user, token }: any) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session) {
        session.user = {
          ...session.user,
          uid: token.user.uid,
          emailVerified: token.user.emailVerified,
        };
        return session;
      } else return null;
    },
  },
};

export default NextAuth(authOptions);
