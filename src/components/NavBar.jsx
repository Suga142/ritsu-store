import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (

        <div className="container">
            <div className="row bg-light">
                <div className="col-md-11">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="img/logo-mini.png" alt="Ritsu-Store" width="120" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Funko Pop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Llaveros</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Peluches</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}

export default NavBar;