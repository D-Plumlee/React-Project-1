import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item border-end">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/SuperFam">
                Super Famicom
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/Xbox">
                Xbox
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/Ps2">
                Playstation 2
              </Link>
            </li>
            <li className="nav-item border-end">
              <Link className="nav-link" to="/ThreeDS">
                3DS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/NSwitch">
                Switch
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
