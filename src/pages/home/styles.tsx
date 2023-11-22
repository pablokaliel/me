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
`;

export const Button = styled.button`
  border: 1px solid #8100ab;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: transparent;
  color: #8100ab;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: var(--transition);
  width: -moz-max-content;
  width: max-content;
`;

export const ButtonContact = styled.button`
  border: 1px solid #8100ab;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: #8100ab;
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
  flex-direction: column;
  h5 {
    color: #8892b0;
  }
  h1 {
    color: #8100ab;
  }
`;
