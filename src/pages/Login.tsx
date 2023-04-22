import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usersSelector } from "../features/users/usersSlice";

// Utilities
import { redirect } from "../utilities/redirect";

// Components
import Logo from "../components/Logo";
import Btn from "../components/Btn";
import Box from "../components/Box";
import BoxTitle from "../components/BoxTitle";
import Label from "../components/form/Label";
import Input from "../components/form/Input";
import useFormData from "../hooks/useFormData";
import PasswordToggler from "../components/form/PasswordToggler";

const Login = () => {

  const users: User[] = useSelector(usersSelector);

  useEffect(() => {
    document.title = "Login - Fakebook";
  }, []);

  const {data, updateData} = useFormData({
    email: "",
    password: ""
  })
  const [hasError, setHasError] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userFinder = users.find(user => (
      user.email === data.email &&
      user.password === data.password
    ));

    setHasError(userFinder === undefined);
    if(userFinder !== undefined) {
      redirect("/"+userFinder.id);
    } else {
      window.scrollTo(0,0);
    }
  }

  return <>
    <div className="container" style={{maxWidth: "500px"}}>
      <div className="d-flex py-md-5 py-4 align-items-center flex-column">
        <Logo className="mb-4" />
        <Box>
          <BoxTitle>Login</BoxTitle>
          <form className="p-3" onSubmit={handleSubmit}>
            {hasError && (
              <div className="alert alert-danger">
                Invalid email or password
              </div>
            )}
            {/* Email */}
            <div className="form-group mb-3">
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                value={data.email}
                onChange={e => updateData("email", e.target.value)}
                id="email"
              />
            </div>
            {/* Password */}
            <div className="form-group mb-3">
              <Label htmlFor="password">
                Password
              </Label>
              <Input
                type="password"
                value={data.password}
                onChange={e => updateData("password", e.target.value)}
                id="password"
                ref={passwordRef}
              />
            </div>
            <div className="mb-3">
              <PasswordToggler
                passwordEl={passwordRef.current || []}
              />
            </div>
            {/* Submit btn */}
            <Btn className="btn-primary" type="submit">
              Login
            </Btn>
          </form>
        </Box>
        <Box className="mt-3 p-3">
          <p className="text-center mb-0">
            New to fakebook?
            <Link to="/signup" className="ms-1">Create your account</Link>.
          </p>
        </Box>
      </div>
    </div>
  </>
}

export default Login;