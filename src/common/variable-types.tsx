export interface LoginForm {
  email: string;
  password: string;
}
export interface SignupForm extends LoginForm {
  passwordConfirm: string;
}

export interface UserProfile {
  auth_uid: string;
  role: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  avatar: string;
  address: string;
  phone: string;
  emailVerified: boolean;
}
