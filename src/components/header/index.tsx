import { Code } from "@phosphor-icons/react";
import * as S from "./styles";
import useNavbarAnimation from "./useNavbarAnimation";

export function Navbar() {
  const { isScroll } = useNavbarAnimation();
  return (
    <S.Container data-scroll-active={isScroll}>
      <div>
        <S.Logo data-scroll-active={isScroll}>
          <a href="#">
            <Code
              style={{ transition: "width 0.36s ease-in-out, height 0.36s ease-in-out" }}
              size={isScroll ? 40 : 60}
              color="#fff"
            />
          </a>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
          <a href="#about">sobre</a>
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />
          <a href="#projects">projetos</a>
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />
          <a href="#contact">contato</a>
        </S.Nav>
      </div>
    </S.Container>
  );
}
