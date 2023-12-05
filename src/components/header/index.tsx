import * as S from "./styles";

import { Code } from "@phosphor-icons/react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";

import useNavbarAnimation from "./useNavbarAnimation";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import NavLink from "./navLinks";

interface Props {
  toggleTheme: () => void;
}

export function Navbar({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext) || {};
  const { isScroll } = useNavbarAnimation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const visibleSection = sections.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (
          section &&
          window.scrollY >= section.offsetTop &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          return sectionId;
        }
        return null;
      });
      console.log("Seção visível:", visibleSection);
      setActiveSection(visibleSection || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container data-scroll-active={isScroll}>
      <div>
        <S.Logo data-scroll-active={isScroll}>
          <Link to="home" spy={true} smooth={true} duration={600}>
            <Code
              style={{ transition: "width 0.36s ease-in-out, height 0.36s ease-in-out" }}
              size={isScroll ? 40 : 60}
            />
          </Link>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
        <NavLink
            to="home"
            title="Inicio"
            icon={IoHomeOutline}
            activeSection={activeSection}
            isScroll={isScroll}
          />
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />

          <NavLink
            to="about"
            title="Sobre"
            icon={FaRegUser}
            activeSection={activeSection}
            isScroll={isScroll}
          />
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />

          <NavLink
            to="projects"
            title="Projetos"
            icon={VscFileSubmodule}
            activeSection={activeSection}
            isScroll={isScroll}
          />
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />

          <NavLink
            to="contact"
            title="Contato"
            icon={TiMessages}
            activeSection={activeSection}
            isScroll={isScroll}
          />
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            height={10}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            offColor="#6c757d"
            onColor="#fff"
            offHandleColor="#fff"
            onHandleColor="#6c757d"
          />
        </S.Nav>
      </div>
    </S.Container>
  );
}