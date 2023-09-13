export const emailValidation = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const passwordValidation = (password: string) => {
  const minLength = 8;
  const criteria = [];

  if (password.length < minLength) {
    criteria.push('Minimum length of 8 characters');
  }

  if (!/[A-Z]/.test(password)) {
    criteria.push('At least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    criteria.push('At least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    criteria.push('At least one number');
  }

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    criteria.push('At least one special character');
  }

  return criteria;
};
