import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
    return(
        <>
            <Link to="/" className="btn btn-lg btn-primary text-capitalize shadow-0 me-3">User List</Link>
            <Link to="/register" className="btn btn-lg btn-primary text-capitalize shadow-0">User Registration</Link>

            <Outlet />
        </>
    );
}

export default Navbar;