import React, { ComponentProps } from "react"
import {BsCheckCircle} from "react-icons/bs";
import { passwordFeatures, specialCharacters } from "../../hooks/usePasswordStrength";

interface strengthItemProps {
  isChecked: boolean;
  title: string;
}

const StrengthItem: React.FC<strengthItemProps> = ({
  isChecked = false,
  title = ""
}) => {
  return <>
    <div 
      aria-label={`${title}, ${isChecked ? "" : "not"} checked`} 
      className="d-flex"
    >
      <BsCheckCircle 
        aria-hidden="true" 
        color={isChecked ? "green" : "gray"}
        style={{opacity: isChecked ? 1 : .5}}
        className="flex-shrink-0 mt-1"
      />
      <p aria-hidden="true" className="ms-2 text-secondary mb-0 flex-grow-1">{title}</p>
    </div>
  </>
}

interface PasswordStrengthProps extends ComponentProps<"div">{
  features: passwordFeatures;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = function({
  features = {
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialCharacters: false,
    has8To32Characters: false
  },
  ...attrs
}) {
  return <>
    <div className="mt-2" aria-label="Password strength" {...attrs}>
      <StrengthItem
        title="Has at least a lowercase letter [a-z]"
        isChecked={features.hasLowerCase}
      />
      <StrengthItem
        title="Has at least an uppercase letter [A-Z]"
        isChecked={features.hasUpperCase}
      />
      <StrengthItem
        title="Has at least a number [0-9]"
        isChecked={features.hasNumber}
      />
      <StrengthItem
        title={`Has at least a special character ${specialCharacters.join("")}`}
        isChecked={features.hasSpecialCharacters}
      />
      <StrengthItem
        title="Password length is between 8 and 32 characters"
        isChecked={features.has8To32Characters}
      />
    </div>
  </>
}

export default PasswordStrength;