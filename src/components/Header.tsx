import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-end gap-2 p-2">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Header;
