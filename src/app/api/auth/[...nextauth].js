import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "#000", // Hex color code
    buttonText: "#fff", // Hex color code
  },
};
export default NextAuth(authOptions);
