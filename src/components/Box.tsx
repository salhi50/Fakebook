import React from "react"

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<Props> = function({
  children = "",
  className = "",
  ...attrs
}) {
  return <>
    <div
      className={"bg-white shadow-sm border w-100 " + className}
      {...attrs}
    >
      {children}
    </div>
  </>
}

export default Box;