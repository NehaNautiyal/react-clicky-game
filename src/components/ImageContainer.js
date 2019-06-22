import React from "react";

function ImageContainer(props) {
    return (
        <div>
            <div className="container">{props.children}</div>;
        </div>
    )

}

export default ImageContainer;