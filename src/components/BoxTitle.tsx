import React from "react"

interface Props extends React.ComponentProps<"h5"> {
  children: string;
  align?: "left" | "center" | "right";
}

const BoxTitle: React.FC<Props> = function({
  children = "",
  align = "center",
  ...attrs
}) {
  return <>
    <h5
      className="bg-light p-3 py-2"
      style={{textAlign: align}}
      {...attrs}
    >
      {children}
    </h5>
  </>
}

export default BoxTitle;