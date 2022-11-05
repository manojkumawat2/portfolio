import React from "react";
import Item from "./Item";
import './Navbar.css';

function Navbar() {
    const items = [
        { name: "Home", icon: "bi bi-house-door", link: "/" },
        { name: "Blogs", icon: "bi bi-book", link: "https://mkkumawat.medium.com/", target: "_blank" },
    ];

    const itemsList = items.map((item, index) => {
        return (<Item key={index} name={item.name} icon={item.icon} link={item.link} target={item.target} />);
    });
    
    return (
        <div className="navbar-custom">
            {itemsList}
        </div>
    );
}

export default Navbar;