import { useEffect } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import Logo from "../components/Logo";

const Home = () => {

  useEffect(() => {
    document.title = "Fakebook - Home";
  }, []);

  return <>
  <div className="w-100 vh-100 d-flex align-items-center justify-content-center flex-column py-4">
    <Logo />
    <p className="mt-2 mb-3 fs-5 text-center">Welcome to fakebook</p>
    <div className="d-flex">
      <Btn className="btn-primary me-3 mb-2">
        <Link to="/login" className="text-white text-decoration-none">Login</Link>
      </Btn>
      <Btn className="btn-primary mb-2">
        <Link to="/signup" className="text-white text-decoration-none">Signup</Link>
      </Btn>
    </div>
  </div>
  </>
}

export default Home;