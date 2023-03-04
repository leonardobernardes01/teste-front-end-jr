import React from "react";
import "glider-js/glider.min.css";

import Products from "../Products/index";

function Shelf(props) {


  console.log(props.title, "shelf")

  return (
    <section className="content__shelf">
      <h1>Produtos relacionados</h1>
      <ul className={`content__shelf--ul${props.title ? "" : "--seeAll"}`}>
        {props.title ? (
          props.title.map((item) => {
            return <li className="content__shelf--li">{item.title}</li>;
          })
        ) : (
          <p  className="content__shelf--seeAll">Ver todos</p>
        )}
      </ul>
      <Products />
    </section>
  );
}

export default Shelf;
