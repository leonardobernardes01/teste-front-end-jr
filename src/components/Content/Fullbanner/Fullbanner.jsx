import React from "react";
import image from "../../../images/fullbanner.png"

function Fullbanner() {
    return (
        <section className="content__fullbanner">
            <img src={image} alt="Fullbanner"/>
            <div className="content__fullbanner--text">
                <h1>Venha conhecer nossas promoções</h1>
                <h2>50% Off nos produtos</h2>
                <button>Ver produto</button>  
            </div>
        </section>
    )
}

export default Fullbanner