import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then( () => {
                // console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const NavItems = <>
        <li> <Link to="/"> Home</Link></li>
        <li><Link to="/about"> About</Link></li>
        <li><Link to="/services"> Services</Link></li>
        <li><Link to="/blog">Blog </Link></li>
        <li><Link to="/contact">Contact </Link></li>

        {user?.email ? <>
            <li> <Link to='/bookings'>My Booking</Link> </li>
            <li><button onClick={handleLogOut} className="font-semibold">Log out</button></li>
        </>
            : <li><Link to="/login">Log in </Link></li>
        }


    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">

                        {/* navbar link */}
                        {NavItems}

                    </ul>
                </div>

                <Link to='/' className=" ">
                    <img className=" h-14" src={logo} alt="logo" />
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {/* navbar link */}
                    {NavItems}

                </ul>
            </div>
            <div className="navbar-end">

                <button className="btn  btn-circle mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

                <button className="btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:border-0 ">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;