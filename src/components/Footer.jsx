import React from "react";

const Footer = () => {


    return (
        <div>
            <div className="card text-center">
                <h5 className="card-header bg-info">Contáctanos:</h5>
                <div className="card-body alert alert-info m-0">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ritsu.store/" className="pe-3">
                        <img src="/img/whatsapp.svg" alt="WhatsappIcon" width="40px" />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ritsu.store/" className="ps-3">
                        <img src="/img/instagram.svg" alt="InstagramIcon" width="40px" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer;