import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 15+ Companies</h3>
        <div className="brand-section-slider">
          {/* My First Image of the Company */}
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 10rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.8rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
    transition: filter 0.3s ease-in-out;
  }

  .slide:hover img {
    filter: brightness(0.8); /* Example hover effect - darken the image */
  }

  .brand-section-slider {
    /* This is used for to display the company image logo in the center */
    margin-top: 3.2rem;
    display: flex;
    justify-content: center;
    gap: 7rem;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 2fr 2fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
