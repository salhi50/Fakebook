type EmailVerification = {
  email: string;
  isValidEmail: boolean;
  isAlreadyTaken: boolean;
}

const getEmailError = ({
  email = "",
  isValidEmail = true,
  isAlreadyTaken = false
}: EmailVerification): string | null => {

  if(!isValidEmail) {
    return "Invalid email adress";
  } else if(isValidEmail && isAlreadyTaken) {
    return `"${email}" is already taken.`;
  }
  return null;

}

export {
  getEmailError
}