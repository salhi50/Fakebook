import React from "react";

interface Props extends React.ComponentProps<"div"> {
  show?: boolean;
  children: string;
}

const ErrorMessage: React.FC<Props> = function({
  show = false,
  children = "",
  ...otherAttributes
}) {
  return <>
    <div 
      aria-hidden={show ? "false" : "true"}
      className="text-danger mt-2"
      style={{display: show ? "block" : "none"}}
      {...otherAttributes}
    >
      <p className="mb-0">
        {children}
      </p>
    </div>
  </>
}

export default ErrorMessage;