import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log("User Context:", user);
  console.log("Loading:", isLoading);

  const handleLogOut = () => {
    setIsLoading(true);
    logOut()
      .then(() => {
        console.log("Log out successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-sports-equipment">All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/add-equipment">Add Equipment</NavLink>
      </li>
      {/* <li>
        <NavLink to="/my-equipment">My Equipment</NavLink>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-200 text-black">
        {/* Part 1 */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img className="w-9 h-9" src="/xtremekits-logo.png" alt="" />
            <Link to="/" className="normal-case text-xl font-bold">
              XtremeKits
            </Link>
          </div>
        </div>
        {/* Part 2 */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* Part 3 */}
        <div className="navbar-end">
          {user ? (
            <div>
              <div className="dropdown dropdown-end mr-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-slate-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-gray-700">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn bg-slate-600 btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/profile-icon.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="mr-1">
              <Link className="btn btn-outline mr-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline mr-1" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/*
       
*/
