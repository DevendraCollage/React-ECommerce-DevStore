import React from "react";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You are lost!</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the Button below to go back to the Home.
          </p>
          <Link to={"/"}>
            <Button className="goBack">Go Back To Home Page</Button>
          </Link>
          {/* <a href="/">
            <Button className="goBack">Go Back To Home Page</Button>
          </a> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 7rem 0;
    text-align: center;

    h2 {
      font-size: 7rem;
      color: red;
    }

    h3 {
      font-size: 3.2rem;
    }

    p {
      margin: 2rem 0;
      font-size: 1.8rem;
    }

    .goBack {
      font-size: 1.8rem;
      color: white;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

export default Error;
