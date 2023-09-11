export const firebaseErrorMsgStringClean = (error: string) => {
  const cleanedErrorString = error.replace(/^auth\//, '').replace(/-/g, ' ');
  const capFirstLetterErrorString =
    cleanedErrorString.charAt(0).toUpperCase() +
    cleanedErrorString.slice(1) +
    '.';
  return capFirstLetterErrorString;
};
