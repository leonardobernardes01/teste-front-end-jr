import React, { useState, useEffect } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

import { formatMoney } from "../../../utils/formatMoney";

function Products() {
  const [products, setProducts] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://627ca9a2bf2deb7174de7a47.mockapi.io/teste-front-endjunior/lista-produtos/produtos/vitrine"
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi().then((response) => {
      setProducts(response);
    });
  }, []);

  const selectItem = (item) => {
    setIsModal(true);
    setItemSelected(item);
  };

  const renderContent = () => {
    return (
      <div className="content__modal--content">
        <img src={itemSelected.photo} alt="" />
        <div className="content__modal--info">
          <h2>{itemSelected.productName}</h2>
          <h3>R$ {formatMoney(itemSelected.price)}</h3>
          <p>{itemSelected.descriptionShort}</p>
          <p className="content__modal--details">
            Veja mais detalhes do produto &gt;
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="content__shelf--carrousel">
        <Glider draggable hasArrows slidesToShow={4} slidesToScroll={4}>
          {products &&
            products[0].products.map((item) => {
              return (
                <button
                  key={item.productName}
                  className="content__shelf--product"
                  onClick={() => selectItem(item)}
                >
                  <img src={item.photo} alt="" />
                  <h2>{item.productName}</h2>
                  <div className="content__shelf--prices">
                    <h3>R$ {formatMoney(item.price)}</h3>
                    <p>ou 2x de R$ {formatMoney(item.price / 2)} sem juros</p>
                  </div>
                  <label>Frete grátis</label>
                  <button>Comprar</button>
                </button>
              );
            })}
        </Glider>
      </div>

      {isModal && (
        <div className="content__modal">
          <div className="content__modal--wrapper">
            <button
              type="button"
              className="content__modal--close"
              onClick={() => setIsModal(false)}
            >
              X
            </button>
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
