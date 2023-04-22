import React from "react"

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode,
  className?: string
}

const Btn: React.FC<Props> = function({
  children = "",
  className = "",
  ...attrs
}) {
  return <>
    <button
      className={"btn " + className}
      {...attrs}
    >
      {children}
    </button>
  </>
}

export default Btn;