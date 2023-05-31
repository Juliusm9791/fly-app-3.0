import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "", // Hex color value
    logo: "https://fly--app.herokuapp.com/static/media/fly_logo.83b6d1ef686379a9764d.png", // Absolute URL to logo image
  },
};
export default NextAuth(authOptions);
