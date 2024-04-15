import React from "react";
import { Link } from "react-router-dom";
import FormatePrice from "../Helpers/formateprice";

const Product = (currElem) => {
  //? Destructure the data to the that place
  const { id, name, image, price, category } = currElem;
  return (
    <Link to={`/singleproduct/${id}`}>
      <figure>
        <img src={image} alt={name} />
        <figcaption className="caption">{category}</figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          {/* I will temporary comment this code for the price */}
          {/* <p className="card-data--price">
            <FormatePrice price={price} />
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default Product;
