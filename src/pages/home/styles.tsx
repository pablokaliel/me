import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  height: 100vh;
  background-image: url(./images/Vector.svg);
  background-repeat: no-repeat;
  background-position: right top;

  & > #tsparticles {
    width: 0 !important;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    position: relative;
  }
`;

export const ContentFooter = styled.div`
  height: 100%;
  width: 100%;

  margin-top: 9rem;

  background: rgba(0, 0, 0, 0.142);
  border-bottom: 1px solid #261137;
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);

  span {
    display: inline-block;

    font-size: 2rem;
    font-weight: 500;
    transition: all 0.2s ease;
    color: #c77dff;
  }

  small {
    color: #c77dff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 2.5rem;
    gap: 1rem;
  }
`;

export const ContentMe = styled.div`
  z-index: 999;
  height: 100%;
  padding-top: 6rem;
`;

export const ContentButton = styled.div`
  z-index: 999;
  height: 100%;
  padding-top: 6rem;
`;

export const ContentProjects = styled.div`
  z-index: 999;
  height: 100%;
  padding-top: 6rem;
`;

export const ContentContact = styled.div`
  height: 100%;
  width: 100%;

  z-index: 999;
  padding-top: 9rem;
`;

export const Content = styled.div`
  z-index: 999;
  height: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding-right: 110px;
  padding-left: 110px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  align-items: center;

  position: relative;
  bottom: 0;

  gap: 0.8rem;

  &::after {
    height: 10rem;
    width: 1px;

    content: "";
    background-color: #fff;
    bottom: 0;
  }

  a {
    color: #fff;
    transition: all 0.3s ease-in;

    &:hover {
      color: #9d4edd;
      scale: 1.2;
    }
  }
`;

export const Center = styled.div``;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  align-items: center;

  position: relative;
  bottom: 0;

  gap: 0.8rem;

  &::after {
    height: 10rem;
    width: 1px;

    content: "";
    background-color: #fff;
    bottom: 0;
  }

  a {
    color: #fff;
    transition: all 0.3s ease-in;

    &:hover {
      color: #9d4edd;
      scale: 1.2;
    }
  }
`;

export const Me = styled.div`
  z-index: 9999;
  padding-top: 1rem;
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  grid-area: div1;

  h2 {
    font-size: 1.2rem;
  }
`;

export const DivImg = styled.div`
  width: 192px;
  height: 194px;

  border: 2px solid #7b2cbf;
  border-radius: 5px;

  margin-bottom: 1.5rem;

  position: relative;

  &::after {
    width: 100%;
    height: 100%;
    content: "";

    background-image: url("https://github.com/pablokaliel.png");
    background-size: cover;

    border-radius: 5px;
    top: -15px;
    left: -15px;

    position: absolute;
    transition: all 0.3s ease;
  }

  &:hover::after {
    top: -20px;
    left: -20px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Typing = styled.div`
  height: 19px;
  margin-top: 0.5rem;
  position: relative;
  color: #d8b8eb;

  @keyframes blinckCursor {
    from {
      background-color: #fff;
    }
    to {
      background-color: transparent;
    }
  }

  &::after {
    width: 1px;
    height: 100%;
    content: "";

    background-color: #fff;
    border-radius: 5px;

    position: absolute;
    animation: blinckCursor 600ms steps(40) infinite normal;
  }
`;

export const Button = styled.button`
  width: -moz-max-content;
  width: max-content;

  display: inline-block;
  cursor: pointer;

  border: 1px solid #7b2cbf;
  border-radius: 0.4rem;
  background-color: transparent;
  color: #e0aaff;

  padding: 0.75rem 1.2rem;
  transition: all 0.3s;

  &:hover {
    background-color: #c77dff;
    color: #fff;
  }
`;

export const ButtonContact = styled.button`
  width: max-content;

  display: inline-block;
  cursor: pointer;

  border: 1px solid #7b2cbf;
  border-radius: 0.4rem;
  background-color: #7b2cbf;
  color: #e0aaff;

  padding: 0.75rem 1.2rem;
  transition: all 0.3s;

  &:hover {
    background-color: #c77dff;
    color: #fff;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2.5rem;
`;

export const DivTitleAbout = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: title;

  text-align: center;
  margin-bottom: 5.6rem;

  h5 {
    color: #e0aaff;
  }

  h1 {
    color: #ffffff;
  }
`;

export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "div1 div2";

  margin-left: 110px;
  margin-right: 110px;
  gap: 5%;

  position: relative;
  padding-left: 10px;

  a {
    text-decoration: none;
    color: #e0aaff;
  }

  &::before {
    width: 1px;
    height: 100%;
    content: "";

    background-color: #e0aaff;
    position: absolute;
    top: 0;
  }
`;

export const CardTechnologies = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  background-color: #00000070;

  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;

  h4 {
    margin: 30px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 18px;
`;

export const Technologies = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #8a11daaf;
  border-radius: 8px;
  font-size: 0.7rem;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #8a11da6e;
    background-color: #10002bb1;
  }

  a {
    width: 100%;
    height: 100%;

    position: absolute;
    top: -10px;
    left: -10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #10002b;
    color: #dbd8dc;
    border-radius: 8px;
    border: 1px solid #4906769f;
    list-style: none;

    gap: 8px;
    padding: 5px;
    transition: all 0.3s ease;

    &:hover {
      top: -15px;
      left: -15px;

      border: 1px solid #a600ff;
    }
  }
`;

export const PortifolioContainer = styled.div`
  width: 74%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    width: 85%;
  }
`;

export const Article = styled.a`
  position: relative;

  background-color: #0d0022c4;
  color: #eeeeee;
  border-radius: 8px;
  border: 1px solid #3f197d75;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 33%);

  text-decoration: none;
  padding: 2rem 1.5rem;

  transition: all 0.3s;

  &:hover {
    border-color: #7b2cbf;
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ArticleImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: end;

    gap: 2px;

    div {
      display: flex;
      gap: 2px;
      align-items: center;
    }

    p {
      color: #b0ab88;
      font-size: 0.8rem;
    }
  }

  a {
    color: #7b2cbf;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      scale: 1.1;
    }
  }
`;

export const ArticleText = styled.div`
  margin-top: 0.7rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 12px;
      margin-bottom: 1rem;
    }
  }

  h3 {
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #9888a0;
  }

  small {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;

    color: #e0aaff;
    font-size: 0.8rem;
    text-align: left;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FormContact = styled.div`
  display: grid;
  grid-template-columns: 30% 50%;

  gap: 15%;
  padding-right: 110px;
  padding-left: 110px;

  @media screen and (max-width: 1400px) {
    margin-top: 5rem;
    max-width: 1200px;
  }
`;
export const DivImageRepo = styled.div`
  width: 100%;
  position: relative;

  div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;

    position: relative;

    aspect-ratio: 16/9;
    z-index: 1;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 2;
    pointer-events: none;
  }
`;

export const DivStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 3px;
  right: 32px;

  gap: 4px;

  span {
    font-size: 0.8rem;
  }
`;

export const Form = styled.div``;

export const Contact = styled.div`
  display: flex;
  position: relative;

  transform-style: preserve-3d;
  transform: translateZ(0);
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
