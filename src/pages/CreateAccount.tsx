import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersActions } from "../features/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

// Custom hooks
import usePasswordStrength from "../hooks/usePasswordStrength";
import useFormData from "../hooks/useFormData";

// Utilities
import { isEmptyString } from "../utilities/form/isEmptyString";
import { getUsernameError } from "../utilities/form/getUsernameError";
import { getEmailError } from "../utilities/form/getEmailError";
import { getPasswordError, getConfirmError } from "../utilities/form/getPasswordError";
import { redirect } from "../utilities/redirect";

// Components
import Logo from "../components/Logo";
import Box from "../components/Box";
import BoxTitle from "../components/BoxTitle";
import Label from "../components/form/Label";
import Input from "../components/form/Input";
import PasswordStrength from "../components/form/PasswordStrength";
import Btn from "../components/Btn";
import useEmailValidator from "../hooks/useEmailValidation";
import ErrorMessage from "../components/form/ErrorMessage";
import PasswordToggler from "../components/form/PasswordToggler";

const CreateAccount = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Create an Account - Fakebook";
  },[]);

  const {data, updateData, errors, setError} = useFormData({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const {isValidEmail, isEmailAlreadyTaken} = useEmailValidator(data.email);

  const {features, isValidPassword} = usePasswordStrength(data.password);

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const validateForm = useCallback(() => {
    setError("username", getUsernameError(data.username));
    setError("email", getEmailError({
      email: data.email,
      isValidEmail,
      isAlreadyTaken: isEmailAlreadyTaken
    }));
    setError("password", getPasswordError({isValidPassword}));
    setError("confirmPassword", getConfirmError({
      password: data.password,
      confirm: data.confirmPassword
    }))
  }, [data, isEmailAlreadyTaken, isValidEmail, isValidPassword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValidForm = (
      !isEmptyString(data.username) &&
      isValidEmail && !isEmailAlreadyTaken &&
      isValidPassword &&
      data.password === data.confirmPassword
    )
    if(isValidForm) {
      Object.keys(data).forEach(key => setError(key, null));
      const new_user_id = nanoid(6);
      dispatch(usersActions.addUser({
        id: new_user_id,
        username: data.username,
        email: data.email,
        password: data.password,
        joined: new Date().toLocaleString(),
      }))
      redirect("/"+new_user_id);
    } else {
      validateForm();
    }
  }

  return <>
    <div className="container" style={{maxWidth: "500px"}}>
      <div className="d-flex py-md-5 py-4 align-items-center flex-column">
        <Logo className="mb-4" />
        <Box>
          <BoxTitle>Create an account</BoxTitle>
          <form onSubmit={handleSubmit} className="p-3">
            {/* Username */}
            <div className="form-group mb-3">
              <Label htmlFor="username">Username</Label>
              <Input
                value={data.username}
                onChange={((e) => updateData("username", e.target.value))}
                id="username"
                hasError={errors.username !== null}
              />
              <ErrorMessage show={errors.username !== null}>
                {errors.username || ""}
              </ErrorMessage>
            </div>
            {/* Email */}
            <div className="form-group mb-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                value={data.email}
                onChange={((e) => updateData("email", e.target.value))}
                id="email"
                hasError={errors.email !== null}
              />
              <ErrorMessage show={errors.email !== null}>
                {errors.email || ""}
              </ErrorMessage>
            </div>
            {/* Password */}
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                value={data.password}
                onChange={((e) => updateData("password", e.target.value))}
                id="password"
                hasError={errors.password !== null}
                ref={passwordRef}
              />
            <ErrorMessage show={errors.password !== null}>
              {errors.password || ""}
            </ErrorMessage>
            </div>
            {/* Password strength */}
            <div className="mb-3">
              <PasswordStrength features={features} />
            </div>
            {/* Confirm password */}
            <div className="form-group mb-3">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input
                type="password"
                value={data.confirmPassword}
                onChange={((e) => updateData("confirmPassword", e.target.value))}
                id="confirm"
                hasError={errors.confirmPassword !== null}
                ref={confirmRef}
              />
              <ErrorMessage show={errors.confirmPassword !== null}>
                {errors.confirmPassword || ""}
              </ErrorMessage>
            </div>
            <div className="mb-3">
              <PasswordToggler
                passwordEl={(
                  passwordRef.current && confirmRef.current
                  ? [passwordRef.current, confirmRef.current]
                  : []
                )}
              />
            </div>
            {/* Submit btn */}
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Login instead</Link>
              <Btn type="submit" className="btn-primary">
                Create your account
              </Btn>
            </div>
          </form>
        </Box>
      </div>
    </div>
  </>
}

export default CreateAccount;