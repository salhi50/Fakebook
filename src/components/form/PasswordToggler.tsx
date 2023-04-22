import React, { useCallback } from "react"
import Label from "./Label";

interface Props extends React.ComponentProps<"div"> {
  passwordEl: HTMLInputElement | HTMLInputElement[]
}

const PasswordToggler: React.FC<Props> = function({
  passwordEl
}) {

  const togglePassword = useCallback((): void => {
    function toggle(passwordEl: HTMLInputElement) {
      let type = passwordEl.type;
      passwordEl.type = type === "password" ? "text" : "password";
    }
    if(Array.isArray(passwordEl)) {
      passwordEl.forEach(ps => toggle(ps));
    } else {
      toggle(passwordEl);
    }
  }, [passwordEl]);

  return <>
    <div className="form-check user-select-none" aria-label="Password toggler">
      <input
        type="checkbox"
        className="form-check-input"
        onChange={togglePassword}
        defaultChecked={false}
        id="password-toggle"
      />
      <Label htmlFor="password-toggle" className="form-check-label">
        Show password
      </Label>
    </div>
  </>
}

export default PasswordToggler;