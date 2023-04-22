import { useCallback, useEffect, useState } from "react";

export const specialCharacters = ["$", "!", "@", "#", "&", "*", "-", "_"];

export type passwordFeatures = {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumber: boolean;
  hasSpecialCharacters: boolean;
  has8To32Characters: boolean;
}

const usePasswordStrength = (password: string) => {
  
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [features, setFeatures] = useState<passwordFeatures>({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialCharacters: false,
    has8To32Characters: false
  })

  const includesSpecialCharacters = useCallback(() => {
    for(let char of specialCharacters) {
      if(password.includes(char)) {
        return true;
      }
    }
    return false;
  }, [password]);

  useEffect(() => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacters = includesSpecialCharacters();
    const has8To32Characters =/^.{8,32}$/.test(password);
    setFeatures({
      hasLowerCase, hasUpperCase, hasNumber,
      hasSpecialCharacters, has8To32Characters
    })
    setIsValidPassword(
      hasLowerCase && hasUpperCase && hasNumber &&
      hasSpecialCharacters && has8To32Characters
    )
  }, [password]);

  return {
    features,
    isValidPassword
  }
}

export default usePasswordStrength;