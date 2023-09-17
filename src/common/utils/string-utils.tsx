// Cleaning firebase backend response from reset password
export const firebaseErrorMsgResetClean = (error: string) => {
  if (error.includes('auth')) {
    const cleanedErrorString = error.replace(/^auth\//, '').replace(/-/g, ' ');
    const capFirstLetterErrorString =
      cleanedErrorString.charAt(0).toUpperCase() +
      cleanedErrorString.slice(1) +
      '.';
    return capFirstLetterErrorString;
  } else return 'Password reset email sent Error. Try again later.';
};

// Cleaning firebase backend response form singup
export const firebaseErrorMsgSignupClean = (error: string) => {
  if (error.includes('auth')) {
    const result = error.replace(
      /^FirebaseError: Firebase: Error \(auth\/(.*)\)\./,
      '$1',
    );
    const finalResult = result.replace(/-/g, ' ');
    const capFirstLetterErrorString =
      finalResult.charAt(0).toUpperCase() + finalResult.slice(1) + '.';
    return capFirstLetterErrorString;
  } else return error;
};

// Sorting out email and password errors
export const sortingMsgforEmailOrPasw = (msg: string) => {
  if (msg.includes('password')) {
    return {
      emailError: '',
      passwordError: firebaseErrorMsgSignupClean(msg),
    };
  } else
    return {
      passwordError: '',
      emailError: firebaseErrorMsgSignupClean(msg),
    };
};
