import Logo from "../components/Logo";

const Header = () => {
  return <header className="bg-white shadow-sm border-bottom">
    <div className="container-lg">
      <div className="d-flex justify-content-center py-2">
        <Logo />
      </div>
    </div>
  </header>
}

export default Header;