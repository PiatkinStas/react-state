import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="b">Stats</Link>
        <Link to="c">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
