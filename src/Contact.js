import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      {/* Google Map - For Displaying the Map on the website */}
      <iframe
        className="cityMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236295.74806764474!2d70.65613164077557!3d22.273403452076042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710049185269!5m2!1sen!2sin"
        width="70%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          {/* This is my contact form and i will use the formspree for fill the form */}
          <form
            className="contact"
            action="https://formspree.io/f/moqgppyb"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              autoComplete="off"
              required
            />
            <textarea
              placeholder="MESSAGE"
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .common-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  //? Set the map in the center of the screen
  .cityMap {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .common-heading {
    text-transform: uppercase;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 3.4rem;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 65rem;
      margin: auto;

      .contact {
        display: flex;
        flex-direction: column;
        margin-bottom: 3.4rem;
        gap: 30px;
        max-width: 65rem;
        margin: 0 auto;
        align-items: center;
        padding: 2rem 0;
        background-color: ${({ theme }) => theme.colors.bg};
        border: 0.1rem solid ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }

  input,
  textarea {
    width: 100%;
    max-width: calc(100% - 4.8rem);
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    /* text-transform: uppercase; */
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export default Contact;
