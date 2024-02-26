import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-end gap-2 p-2">
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/stocks">Stocks</Link>
    </header>
  );
};

export default Header;
