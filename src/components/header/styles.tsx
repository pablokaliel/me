import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;
  position: fixed;
  padding-right:110px;
  padding-left:110px;
  top: 0;
  left: 0;
  transition: all 0.36s;
  border-bottom: 1px solid transparent;
  z-index: 9999;

  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &[data-scroll-active="true"] {
    height: 90px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(13.5px);
    border-bottom: 1px solid #261137;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  font-size: 16px; /* Defina o tamanho padrão da logo */
  transition: all 0.36s;

  &[data-scroll-active="true"] {
    width: 40px;
    height: 40px;
    font-size: 12px; /* Ajuste o tamanho da fonte da logo */
  }
`;


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  font-size: 24px; /* Defina o tamanho padrão do texto */

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #7440aa;
    }
  }

  &[data-scroll-active="true"] {
    font-size: 16px; /* Aplique o tamanho maior ao elemento Nav */
  }
`;


export const NavLink = styled.div`
  position: relative;

  font-size: 10px;
  opacity: 0.8;
  transition: all 0.36s;


    padding-left: 110px;


  &:not(:last-child)::after {
    content: "";
    width: 35px;
    height: 2px;
    position: absolute;
    right: -75px;
    top: 50%;
    transform: translateY(-50%);
    
    background: #898989;
  }

  & a {
    color:white;
    text-decoration: none;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Translate = styled.select`

  font-size: 24px;
  color: white;
  border: none;
  background: transparent;
  transition: all 0.36s;

  &[data-scroll-active="true"] {
    font-size: 1.4rem;
  }
`;
