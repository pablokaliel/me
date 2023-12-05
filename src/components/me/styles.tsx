import styled from "styled-components";

export const Me = styled.div`
  z-index: 9999;
  padding-top: 1rem;
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
