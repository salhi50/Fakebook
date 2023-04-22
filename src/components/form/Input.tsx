import React, { forwardRef } from "react"

interface Props extends React.ComponentProps<"input"> {
  type?: "text" | "password" | "email" | "url" | "search";
  className?: string;
  hasError?: boolean;
}

const Input = forwardRef(function({
  type = "text",
  className = "",
  hasError = false,
  ...otherInputAttributes
}: Props, inputRef: React.ForwardedRef<HTMLInputElement>) {

  return <>
    <input
      type={type}
      ref={inputRef}
      spellCheck="false"
      autoCapitalize="off"
      className={
        "form-control" + 
        (hasError ? " is-invalid" : "") + 
        " " + className
      }
      {...otherInputAttributes}
    />
  </>
  
})

export default Input;