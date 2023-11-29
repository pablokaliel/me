import styled from "styled-components";

export const ContentProjects = styled.div`
  z-index: 999;
  height: 100%;
  padding-top: 6rem;
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

export const ContentContact = styled.div`
  height: 100%;
  width: 100%;

  z-index: 999;
  padding-top: 9rem;
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
