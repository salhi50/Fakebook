import React from "react"

interface Props extends React.ComponentProps<"label"> {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<Props> = function({
  children = "",
  className = "",
  ...otherAttributes
}) {
  return <>
    <label
      className={"form-label " + className}
      {...otherAttributes}
    >
      {children}
    </label>
  </>
}

export default Label;