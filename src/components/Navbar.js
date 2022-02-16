import React from "react"
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import { useGlobalContext } from "../context"
const Navbar = () => {

    const { setSearch } = useGlobalContext();

    return <nav className="navbar">
        <div className="nav-logo">
            <Link onClick={() => setSearch("")} to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
        </div>
        <ul className="nav-links">
            <li>
                <Link onClick={() => setSearch("")} to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
        </ul>
    </nav>
}


export default Navbar