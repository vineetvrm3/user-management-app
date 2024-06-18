import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h1>User Management</h1>
      <ul>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/new-user" className="link">
          <li>Add New User</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
