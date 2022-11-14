import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout, auth } from "../firebase";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between h-[100vh]">
      <nav className="w-[20%] bg-neutral-900 text-neutral-100 p-3 overflow-y-scroll">
        <h2 className="p-2 pb-10 border-b-1 border-neutral-400"> Grid Manager 2.0</h2>
        <p className="p-2 pb-10 border-b-1 border-neutral-400 text-xl">Hey, {auth.currentUser.displayName}</p>
        <ul className="text-xl">
          <li className="p-2 m-2 border-b-neutral-200">
            <Link to="">Dashboard</Link>
          </li>
          <li className="p-2 m-2 border-b-neutral-200">
            <Link to="peak-shaving">Peak Shaving & Alert</Link>
          </li>
          <li className="p-2 m-2 border-b-neutral-200">
            <Link to="demand-response">Demand Response</Link>
          </li>
          <li className="p-2 m-2 border-b-neutral-200">
            <Link to="insights">Insights</Link>
          </li>
          <li className="p-2 m-2 border-b-neutral-200">
            <Link to="version-history">Version History</Link>
          </li>
          <button className="p-2 m-2 border-b-neutral-200" onClick={() => {logout(); navigate("/login", { replace: true }); }} >Logout</button>
        </ul>
      </nav>
      <div className="w-[80%] h-[100vh] bg-neutral-900">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;