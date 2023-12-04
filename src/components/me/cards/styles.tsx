import styled from "styled-components";

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
