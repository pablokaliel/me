import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;
  position: fixed;
  padding-right: 110px;
  padding-left: 110px;
  top: 0;
  left: 0;
  transition: all 0.36s;
  border-bottom: 1px solid transparent;
  z-index: 9999;
  backdrop-filter: blur(0);
  -webkit-backdrop-filter: blur(0);

  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &[data-scroll-active="true"] {
    height: 90px;
    background: rgba(0, 0, 0, 0.35);
    border-bottom: 1px solid #261137;
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  font-size: 16px;
  transition: all 0.36s;

  a {
    color: #fff;
    transition: all 0.3s;

    &:hover {
      color: #E0AAFF;
    }
  }

  &[data-scroll-active="true"] {
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 16px;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover:not([style*="color: #E0AAFF"]) {
      color: #E0AAFF !important;
    }
  }

  &[data-scroll-active="true"] {
    font-size: 14px;
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
    color: white;
    text-decoration: none;
  }

  &:hover {
    opacity: 1;
  }
`;
