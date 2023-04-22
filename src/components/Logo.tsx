import React from "react";
import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<"a"> {
  className?: string;
}

const Logo: React.FC<Props> = function({
  className = ""
}) {
  return <>
    <Link 
      to="/" 
      className={"text-decoration-none " + className} 
      aria-label="Fakebook"
    >
      <h3 className="text-primary user-select-none mb-0" role="presentation" aria-hidden="true">
        Fakebook
      </h3>
    </Link>
  </>
}

export default Logo;