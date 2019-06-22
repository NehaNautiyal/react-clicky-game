import React from "react";
import NavBar from "./NavBar";

function ImageContainer(props) {
    return (
        <div>
            <NavBar />
            <div className="container">{props.children}</div>;
        </div>
    )

}

export default ImageContainer;