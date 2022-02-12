import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export default function NavbarAdmin() {
    const history = useHistory();
    const hanldeLogOut = () => {
        if (localStorage.getItem("UserAdmin")) {
            localStorage.clear();
            history.push('/auth'); 
        }
    }


    return (
        <nav className="navbar navbar-expand-md">
            {/* Brand */}
            <a className="navbar-brand" href="#navbar">
                Admin
            </a>
            {/* Toggler/collapsibe Button */}
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/users"
                        >
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/films"
                        >
                            Films
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/add-new-film"
                        >
                            Add Film
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className='btn danger text-white' style={{border: "none"}} onClick={(hanldeLogOut)}>Log out</button>
            </div>
        </nav>
    )
}
