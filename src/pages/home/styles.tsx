import styled from "styled-components";

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

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 8rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 1.6rem;
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
      color: #b700ff;
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
      color: #b700ff;
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
  border: 2px solid #c801ffa3;
  width: 192px;
  height: 194px;
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
  }
`;

export const Infos = styled.div``;

export const Typing = styled.div`
  margin-top: 0.5rem;
  height: 19px;
  position: relative;

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
  border: 1px solid #b700ff;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: transparent;
  color: #b700ff;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: var(--transition);
  width: -moz-max-content;
  width: max-content;
`;

export const ButtonContact = styled.button`
  border: 1px solid #b700ff;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: #b700ff;
  color: #20013a;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: var(--transition);

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
    color: #8892b0;
  }
  h1 {
    color: #8100ab;
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
    color: #8100ab;
  }

  &::before {
    background-color: #8892b0;
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
  max-height: 60%;

  h4 {
    margin: 30px;
  }

  div {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
  }

  a {
    border-radius: 8px;
    list-style: none;
    border: 1px solid #fff;
    padding: 10px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    align-items: center;
    font-size: 0.7rem;
    max-height: 100px;
    max-width: 200px;

    transition: all 0.3s ease;

    &:hover {
      border: 1px solid #8100ab;
      color: #8100ab;
      transform: translateY(-10px);
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

export const Article = styled.div`
  background-color: #7517ac67;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  height: 300px;
  padding: 2rem 1.5rem;
  position: relative;
  transition: var(--transition);
  transition: transform 0.3s;

  &:hover {
    border-color: #ab5dc6;
    transform: translateY(-10px);
  }
`;

export const ArticleImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;

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
    color: #8892b0;
    transition: all 0.3s;
    &:hover {
      color: #fff;
      scale: 1.1;
    }
  }
`;

export const ArticleText = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 12px;
    }
  }
  h3 {
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  small {
    bottom: 1.5rem;
    color: #8892b0;
    font-size: 0.8rem;
    left: 1.5rem;
    position: absolute;
    text-align: left;
  }
`;

export const FormContact = styled.div`
  display: grid;
  gap: 15%;
  grid-template-columns: 30% 58%;
  padding-right: 110px;
  padding-left: 110px;

  @media screen and (max-width: 1400px) {
    margin-top: 5rem;
    max-width: 1200px;
  }
`;

export const Form = styled.div``;

export const CardContact = styled.div``;

export const ContactInfo = styled.div``;
