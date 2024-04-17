import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMyCustomHook } from "./context/productcontext";
import styled from "styled-components";
import PageNavigation from "./Components/PageNavigation";
import MyImage from "./Components/MyImage";
import { Container } from "../src/Styles/Container";
import FormatPrice from "./Helpers/formateprice";
//? This icons of the React Icons Library
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

// const API = "https://661bb1ed65444945d05012a9.mockapi.io/DevStore";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useMyCustomHook();

  //? now destructure the single products items
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  //? This will use for one time rendering the page
  useEffect(() => {
    getSingleProducts(`https://api.pujakaitem.com/api/products?id=${id}`);
  }, [getSingleProducts, id]);

  // if (isSingleLoading) {
  //   return <div className="page_loading">Loading...</div>;
  // }

  return (
    <Wrapper>
      <PageNavigation title={name} />

      <Container className="container">
        <div className="grid grid-two-column">
          {/* Products Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* Product Data/Information About Products */}
          <div className="product-data">
            <h2>{name}</h2> {/* Product Name */}
            <p>{stars}</p> {/* Stars Rating from of the Customer Reviews */}
            <p>{reviews} Reviews</p> {/* Number of Customer Reviews */}
            {/* Price Information of the Product */}
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            {/* I will display the deal of the day price */}
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            {/* Description of the Products */}
            <p>{description}</p>
            <div className="product-data-warranty">
              {/* Icons of Free Delivery */}
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              {/* Icons of Replacement of the Product */}
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              {/* Icons of DevStore Delivered */}
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>DevStore Delivered </p>
              </div>

              {/* Icons for Warranty of the Product */}
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            {/* Show the product info like Availability, Id, Brand */}
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
// <div>Single Product Page {name}</div>;
