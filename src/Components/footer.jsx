import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
        <p>CopyRight {year}</p>
        </footer>
    );
}

export default Footer;

