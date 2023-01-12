import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (

        <div className="container">
            <div className="row bg-light">
                <div className="col-md-11">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"} ><img src="/img/logo-mini.png" alt="Ritsu-Store" width="120" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" activeclassname ="page" to={"category/Funko"}>Funko</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" activeclassname ="page" to={"category/Llavero"}>Llaveros</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" activeclassname ="page" to={"category/Peluche"}>Peluches</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" activeclassname= "page" to={"category/Pack"}>Packs</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div> 
            </div>
        </div>

    )
}

export default NavBar;