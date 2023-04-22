import React from "react"

interface Props extends React.ComponentProps<"div"> {
  title: string;
  value: string;
  className?: string;
}

const PlainText: React.FC<Props> = function({
  title = "",
  value = "",
  className = ""
}) {
  return <>
    <div className={className}>
      <h6 className="mb-0 text-capitalize">{title}</h6>
      <p className="text-muted mb-0">{value}</p>
    </div>
  </>
}

export default PlainText;