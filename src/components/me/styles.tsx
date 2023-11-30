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
    color: ${(props) => props.theme.colors.link};
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
