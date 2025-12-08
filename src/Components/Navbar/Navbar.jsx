import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const {user,signOutuser}=useAuth()
  const links = (
    <>
      <li>
        <NavLink className="px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all">
          Meals
        </NavLink>
      </li>
     {
      user&&  <li>
        <NavLink to={'/dashboard'} className="px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all">
          Dashboard
        </NavLink>
      </li>
     }
    </>
  );


  const handlelogout=()=>{
    signOutuser()
    .then(()=>{
      alert("Logout Successfully")
    })
    .catch(error=>{
      alert(error.message)
      console.log(error);
      
    })
  }
  return (
    <div className="bg-white shadow-md py-3">
      <div className="navbar w-11/12 mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-emerald-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-52 p-2 shadow-lg border"
            >
              {links}
            </ul>
          </div>

          <a className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent tracking-wide">
            ChefBazar
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-md font-medium">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
         {
          user ? <img src={user.photoURL} alt="" className='w-10 h-10 mask-cover rounded-full' />:
          ""
         }

         {
          user ?<button onClick={handlelogout} className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all shadow">Logout</button> :  <NavLink to={'/login'} className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all shadow">
            Login
          </NavLink>
         }
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
