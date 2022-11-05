import React from "react";

function Item(props) {
    return (
        <a href={props.link} className="navbar-item" target={props.target} rel="noreferrer">
            <i className={props.icon}></i> <span>{props.name}</span>
        </a>
    );
}

export default Item;