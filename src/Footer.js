import React from "react";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import { FaGithub, FaBlogger, FaLinkedin, FaHackerrank } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started!</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contactBtn">
            <a href="/contact">
              <Button>Get Started</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Dark Magic Dracula My Theme*/}

      {/* This is my intro footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Address</h3>
            <p>Rajkot, Gujrat - India</p>
          </div>

          {/* 2 Column of social links section */}
          <div className="footer-icons">
            <h3>Social Link</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com/DevendraCollage" target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://devendraparmar2023.blogspot.com/"
                  target="_blank"
                >
                  <FaBlogger className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/devendra-parmar-458877245/"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.hackerrank.com/profile/devendraparmar22"
                  target="_blank"
                >
                  <FaHackerrank className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 3re column for get important updates */}
          <div className="footer-subscribe">
            <h3>Get Important Updates</h3>
            <form action="#">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR E-MAIL"
              />
              {/* <input type="submit" value="Subscribe" /> */}
              <Button className="mySub">Subscribe</Button>
            </form>
          </div>

          {/* 4th column for contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <h3>+91 8849020930</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} DevendraParmar. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Ensure the footer container spans the full width */
  footer {
    width: 100%;
  }

  .mySub {
    margin-top: 10px;
  }

  /* Make sure the grid columns are evenly distributed */
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  /* Ensure each footer section is aligned properly */
  .footer-about,
  .footer-contact {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .footer-icons {
    margin-right: 5px;
  }

  .contact-short {
    max-width: 70.5vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contactBtn {
    justify-self: center;
    align-self: center;
  }

  footer {
    width: 100%;
    padding: 10rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    margin-top: 3rem;

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1rem; /* Adjust spacing between paragraphs */
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 3.5rem;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
      line-height: 1.5;
      text-transform: uppercase;
      text-align: center;

      hr {
        margin-top: 3rem;
        margin-bottom: 4rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }

      .container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two columns layout */
        align-items: center;
        flex-direction: column; /* Display elements in a column */
      }

      /* Adjust the spacing between paragraphs */
      .container p {
        margin: 0; /* Remove default margin */
      }

      /* Style the links */
      .container a {
        text-decoration: none; /* Remove underline from links */
        color: ${({ theme }) => theme.colors.white}; /* Adjust link color */
      }

      /* Style the links on hover */
      .container a:hover {
        text-decoration: underline; /* Add underline on hover */
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      padding: 2rem 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    footer .container.grid {
      grid-template-columns: auto; /* Adjust the grid layout for mobile */
      gap: 2rem; /* Adjust the gap between grid items */
    }

    footer .container.grid .footer-contact {
      margin-left: 0; /* Reset the left margin */
    }
  }
`;

export default Footer;
