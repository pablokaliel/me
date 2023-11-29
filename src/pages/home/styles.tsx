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
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    position: relative;
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

export const Content = styled.div`
  z-index: 999;
  height: 100%;
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

export const Form = styled.div``;

export const Contact = styled.div`
  display: flex;
  position: relative;

  transform-style: preserve-3d;
  transform: translateZ(0);
`;
