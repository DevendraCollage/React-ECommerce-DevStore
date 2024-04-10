import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myName }) => {
  const { name } = myName;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h2> {name} </h2>
            <p>
              Welcome to DevStore, your one-stop shop for programmers and
              coders. Whether you're a seasoned developer or just starting out
              on your coding journey, we've got everything you need to fuel your
              passion for coding and technology.
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* Our Hero Section Image */}
          <div className="hero-section-image">
            <figure>
              <img
                className="img-style"
                src="images/hero.jpg"
                alt="Hero Section Image"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// ? Configure the CSS of the hero section
const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 80%;
  }

  .grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .hero-section-data {
    flex: 1;

    p {
      margin: 1rem 0;
    }

    h2 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    width: 100%;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 48%;
      top: -3rem;
      z-index: -1;
    }
  }

  .img-style {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      flex-direction: column;
      gap: 2rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
