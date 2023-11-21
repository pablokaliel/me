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
    align-items: center;
  }


`;

export const Title = styled.h1`
  font-size: 8.2rem; /* Substitua pelo tamanho de fonte desejado */
  font-weight: normal;

  & > span {
    padding: 0 2rem;
    background-color: #1C1C1C; /* Substitua pela cor desejada */
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
    font-size: 1.6rem; /* Substitua pelo tamanho de fonte desejado */
  }
`;

export const Content = styled.div`
  z-index: 999;
`;
