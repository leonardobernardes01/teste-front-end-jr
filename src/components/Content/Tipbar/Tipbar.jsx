import React from "react";

function Tipbar(props) {
  return (
    <>
      {props &&
      props.data.map((item) => {
        return (
          <li className="content__tipbar--li">
            <div className="content__tipbar--items">
              <img src={item.path} alt="" />
              <label>{item.title}</label>
            </div>
          </li>
        )
      })
      }

    </>
  );
}

export default Tipbar;
