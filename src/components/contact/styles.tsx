import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContact = styled.div`
  display: grid;
  grid-template-columns: 30% 50%;
  z-index: 9999;
  gap: 15%;
  padding-right: 110px;
  padding-left: 110px;

  @media screen and (max-width: 1400px) {
    margin-top: 5rem;
    max-width: 1200px;
  }
`;

export const CardContact = styled(motion.div)`
  max-width: 260px;
  perspective: 1200px;
  overflow: visible;

  h5 {
    color: #d7d4d4;
  }

  a {
    color: #e0aaff;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const CardContactsA = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 1rem;
  text-align: center;

  background-color: #0d0022;
  border-radius: 1.2rem;
  border: 1px solid #aa0bffba;
`;

export const CardInfos = styled.div`
  margin-bottom: 0.6rem;

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 13.58px;
  }

  a {
    font-size: 16px;
  }
`;

export const ContactInfo = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  button {
    width: -moz-max-content;
    width: max-content;

    display: inline-block;

    background-color: #7b2cbf;
    color: #e0aaff;
    border-radius: 0.4rem;

    border: none;
    outline: none;
    cursor: pointer;

    padding: 0.75rem 1.2rem;
    transition: all 0.3s;

    &:hover {
      background-color: #c77dff;
      color: #fff;
    }
  }

  div {
    width: 100%;

    input {
      width: 100%;
      resize: none;

      background: rgba(0, 0, 0, 0.35);
      border: 2px solid rgba(136, 146, 176, 0.337);
      border-radius: 0.5rem;
      color: #fff;

      padding: 1rem;
      outline: none;

      &:focus {
        border: 2px solid rgba(155, 79, 218, 0.689);
      }
    }

    textarea {
      width: 100%;
      height: 190px;
      resize: none;

      background: rgba(0, 0, 0, 0.35);
      border: 2px solid rgba(136, 146, 176, 0.337);
      border-radius: 0.5rem;
      color: #fff;

      padding: 1rem;
      outline: none;

      &:focus {
        border: 2px solid rgba(155, 79, 218, 0.689);
      }
    }
  }
`;
