export interface LoginForm {
  email: string;
  password: string;
}
export interface SignupForm extends LoginForm {
  passwordConfirm: string;
}
export interface LoginError {
  emailError: string;
  passwordError: string;
}

export interface SignupError extends LoginError {
  passwordConfirmError: string;
  passwordArrayError: string[];
}

export interface UserProfile {
  role: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string;
  address: string;
  phone: string;
}
