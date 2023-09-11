export const firebaseErrorMsgStringClean = (error: string) => {
  if (error.includes('auth')) {
    const cleanedErrorString = error.replace(/^auth\//, '').replace(/-/g, ' ');
    const capFirstLetterErrorString =
      cleanedErrorString.charAt(0).toUpperCase() +
      cleanedErrorString.slice(1) +
      '.';
    return capFirstLetterErrorString;
  } else return 'Password reset email sent Error. Try again later.';
};
