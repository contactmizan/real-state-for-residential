import { Link, NavLink } from "react-router-dom";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { space } from "postcss/lib/list";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-normal font-questrial">Rise
                    <IoPartlySunnyOutline></IoPartlySunnyOutline>
                    <span className="">Group</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                {/* navbar login image */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user && <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        }
                    </div>
                </div>
                <div>
                    {
                        user && <span>{user.email}</span>
                    }
                </div>

                {
                    user ?
                        <button onClick={handleSingOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
}

export default Navbar;