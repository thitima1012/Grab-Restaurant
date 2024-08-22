import{useState} from "react";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton"
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Navbar = () => {
  const {user} = useAuthContext();
const menus = {
  ROLES_ADMIN: [
    { name: "Add restaurant", link: "/add" },
    { name: "Search", link: "/" },
    { name: "Dashboard", link: "/Dashboard" },
  ],
  ROLES_USER: [{ name: "Search", link: "/" }],
  ROLES_MODERATOR: [
    { name: "Add restaurant", link: "/add" },
    { name: "Search", link: "/" },
  ],
};
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Grab Restaurant
          </a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/Add">
            Add Restaurant
          </a>
        </div>
        <div className="flex-none">
          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        
    <div className="navbar-end space-x-2">
      {user &&(
        <div>
          Welcome,{""}
          <span className="text-red-500">
            {user.username}{""}
            {user.role.map((role)=>{
              return(
                <div className={"badge text-xs badge-accent"}>{role}</div>
              );
            })}
          </span>
        </div>
      )}
      {/* {user ?(
        <UserProfile/>
      ): (<div className="space-x-2">
        <RegisterButton/>
        <LoginButton/>
      </div>
    )} */}
    

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {user &&
              menus[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                </li>
              ))}
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
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="navbar-end">
        {user ?(
          <UserProfile/>
        ):(
          <div className="space-x-2">
            <RegisterButton/>
            <LoginButton/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;