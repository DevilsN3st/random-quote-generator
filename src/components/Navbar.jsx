import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1]
    console.log(path)
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            HOME
          </NavLink>
          <NavLink to="/bookmarks" className="navbar-brand">
            BOOKMARKS
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
