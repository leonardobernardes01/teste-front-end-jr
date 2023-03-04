import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

import vtexIcon from "../../../images/vtexIcon.svg";

function Categories() {
  return (
    <section className="content__categories">
      <h2>Navegue por marcas</h2>
      <div className="content__categories--carrousel">
        <Glider draggable hasArrows slidesToShow={5} slidesToScroll={5}>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
          <div className="content__categories--img">
            <img src={vtexIcon} alt="" />
          </div>
        </Glider>
      </div>
    </section>
  );
}

export default Categories;
