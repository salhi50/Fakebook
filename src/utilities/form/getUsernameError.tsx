import { isEmptyString } from "./isEmptyString"

export const getUsernameError = (username: string) => {
  const maxLength = 50;

  if(isEmptyString(username)) {
    return "Username cannot be blank";
  }
  if(username.length > maxLength) {
    return `Username is too long(Maximum is ${maxLength} characters)`;
  }
  return null;
}