import React from "react";

function Banners(props) {
    return (
        <div className="content__banners--image">
            <img src={props.img} alt="" />
            <div className="content__banners--text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <button>Confira</button>
        </div>
    )
}

export default Banners