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
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 8.2rem;
  font-weight: normal;

  & > span {
    padding: 0 2rem;
    background-color: #1c1c1c;
  }
`;

export const Cursor = styled.h1`
  height: 100%;
  width: 1px;
  background-color: #fff;
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
    margin: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
  z-index: 999;
  height: 100%;
  width: 100%;
  padding-top: 9rem;
`;

export const Content = styled.div`
  z-index: 999;
  height: 100%;
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-right: 110px;
  padding-left: 110px;
  justify-content: space-between;
`;

export const Left = styled.div`
  align-self: end;
  position: relative;
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &::after {
    content: "";
    background-color: #fff;
    bottom: 0;
    height: 10rem;
    width: 1px;
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
  align-self: end;
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &::after {
    content: "";
    background-color: #fff;
    bottom: 0;
    height: 10rem;
    width: 1px;
  }

  position: relative;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  grid-area: div1;
  align-items: center;
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
    content: "";
    background-image: url("https://github.com/pablokaliel.png");
    background-size: cover;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -15px;
    left: -15px;
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
  margin-top: 0.5rem;
  height: 19px;
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
    content: "";
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    width: 1px;
    height: 100%;
    animation: blinckCursor 600ms steps(40) infinite normal;
  }
`;

export const Button = styled.button`
  border: 1px solid #7b2cbf;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: transparent;
  color: #7b2cbf;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: var(--transition);
  width: -moz-max-content;
  width: max-content;

  transition: all 0.3s;
  color: #e0aaff;
  &:hover {
    background-color: #c77dff;
    color: #fff;
  }
`;

export const ButtonContact = styled.button`
  border: 1px solid #7b2cbf;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: #7b2cbf;
  color: #20013a;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: var(--transition);

  transition: all 0.3s;
  color: #e0aaff;
  &:hover {
    background-color: #c77dff;
    color: #fff;
  }

  width: max-content;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2.5rem;
`;

export const DivTitleAbout = styled.div`
  display: flex;
  text-align: center;
  grid-area: title;
  flex-direction: column;
  margin-bottom: 5.6rem;

  h5 {
    color: #e0aaff;
  }
  h1 {
    color: #ffffff;
  }
`;

export const AboutMe = styled.div`
  margin-left: 110px;
  margin-right: 110px;
  gap: 5%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-template-areas:
    "title title"
    "div1 div2";

  position: relative;
  padding-left: 10px;

  a {
    text-decoration: none;
    color: #e0aaff;
  }

  &::before {
    background-color: #e0aaff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;

export const CardTechnologies = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #00000070;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  max-height: 70%;

  h4 {
    margin: 30px;
  }
`;

export const Card = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export const Technologies = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  font-size: 0.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #8a11daaf;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #8a11da6e;
    background-color: #10002bb1;
  }

  a {
    background-color: #10002b;
    position: absolute;
    border-radius: 8px;
    border: 1px solid #4906769f;
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    color: #dbd8dc;
    align-items: center;
    top: -10px;
    left: -10px;
    transition: all 0.3s ease;
    padding: 5px;

    &:hover {
      top: -15px;
      border: 1px solid #a600ff;
      left: -15px;
    }
  }
`;

export const PortifolioContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  width: 74%;

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
  border: 1px solid #3f197d75;
  background-color: #0d0022c4;
  text-decoration: none;
  color: #eeeeee;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  position: relative;
  transition: all 0.3s;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 33%);

  &:hover {
    border-color: #7b2cbf;
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ArticleImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1rem;

  div {
    display: flex;
    gap: 2px;
    align-items: end;

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
    bottom: 1.5rem;
    color: #e0aaff;
    font-size: 0.8rem;
    left: 1.5rem;
    position: absolute;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FormContact = styled.div`
  display: grid;
  gap: 15%;
  grid-template-columns: 30% 50%;
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
    aspect-ratio: 16/9;

    display: block;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 2;
    pointer-events: none;
  }
`;

export const DivStar = styled.div`
  position: absolute;
  top: 3px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-size: 0.8rem;
  }
`;

export const Form = styled.div``;

export const Contact = styled.div`
  transform-style: preserve-3d;
  transform: translateZ(0);
  display: flex;
  position: relative;
`;

export const CardContactsA = styled(motion.div)`
  width: 100%;
  padding: 5rem 1rem;

  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #aa0bffba;
  background-color: #0d0022;
  height: 100%;
`;

export const CardContact = styled(motion.div)`
  overflow: visible;
  perspective: 1200px;
  max-width: 260px;

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
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;

  button {
    color: #e0aaff;
    width: 150px;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    background-color: #7b2cbf;

    display: inline-block;
    padding: 0.75rem 1.2rem;
    width: -moz-max-content;
    width: max-content;
  }

  div {
    width: 100%;
    input {
      border: 2px solid rgba(136, 146, 176, 0.337);
      border-radius: 0.5rem;
      color: #fff;
      padding: 1rem;
      resize: none;
      width: 100%;
      outline: none;
      &:focus {
        border: 2px solid rgba(155, 79, 218, 0.689);
      }

      background: rgba(0, 0, 0, 0.35);
    }

    textarea {
      outline: none;
      &:focus {
        border: 2px solid rgba(155, 79, 218, 0.689);
      }

      background: rgba(0, 0, 0, 0.35);

      border: 2px solid rgba(136, 146, 176, 0.337);
      border-radius: 0.5rem;
      color: #fff;
      padding: 1rem;
      resize: none;
      width: 100%;
      height: 190px;
    }
  }
`;
