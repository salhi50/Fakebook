import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "../features/users/usersSlice";


const useEmailValidator = (email: string) => {

  const users: User[] = useSelector(usersSelector);
  const [isValidEmail, setIsValid] = useState(false);
  const [isEmailAlreadyTaken, setIsAlreadyTaken] = useState(false);

  useEffect(() => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(emailPattern.test(email));
    setIsAlreadyTaken(() => {
      const user = users.find(user => user.email === email);
      return typeof user !== "undefined";
    });
  }, [email]);

  return {
    isValidEmail,
    isEmailAlreadyTaken
  }

}

export default useEmailValidator;