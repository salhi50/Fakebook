import { isEmptyString } from "./isEmptyString";

type PasswordVerification = {
  isValidPassword: boolean;
}

type ConfirmVerification = {
  password: string;
  confirm: string;
}

const getPasswordError = ({
  isValidPassword = true
}: PasswordVerification): string | null => {

  if(!isValidPassword) {
    return "Invalid password";
  }
  return null;
}

const getConfirmError = ({
  password = "",
  confirm = ""
}: ConfirmVerification): string | null => {

  if(isEmptyString(confirm) || password !== confirm) {
    return "Password does not match";
  }

  return null;
}

export {
  getPasswordError,
  getConfirmError
}