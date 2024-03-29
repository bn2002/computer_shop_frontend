import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/user/css/Navbar.css";

const Navbar = () => {
    const [logged, setLogged] = useState();

    useEffect(() => {
        if (localStorage.getItem("username")) {
            setLogged(true);
        }
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand navbar-name">
                        CDD.vn
                    </Link>
                    <form className="d-flex w-50">
                        <input
                            className="form-control me-2 nav-input shadow-none   "
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to={"#"}
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i className="fa-solid fa-bell nav-icon"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"#"} className="nav-link" href="#">
                                    <i className="fa-solid fa-cart-shopping nav-icon"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={"/login"}
                                    className="nav-link"
                                    href="#"
                                    tabIndex="-1"
                                    aria-disabled="true"
                                >
                                    {logged ? (
                                        <i className="fa-solid fa-user nav-icon"></i>
                                    ) : (
                                        "Login"
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
