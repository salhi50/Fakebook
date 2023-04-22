import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const NotFound = () => {

  useEffect(() => {
    document.title = "404 page not found - Fakebook"
  }, []);

  return <>
    <div className="d-flex vh-100 flex-column">
      <Header />
      <main className="d-flex flex-grow-1 h-100 align-items-center justify-content-center flex-column">
        <div className="mx-auto text-center" style={{maxWidth: "350px"}}>
          <span className="display-1 fw-bold my-4">404</span>
          <p className="mb-4 text-secondary fs-5">
            Oops! It looks like the page you were trying to reach doesn't exist.
          </p>
          <Link to="/">Back home</Link>
        </div>
      </main>
    </div>
  </>  
}

export default NotFound;