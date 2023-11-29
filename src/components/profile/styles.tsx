import styled from "styled-components";

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
