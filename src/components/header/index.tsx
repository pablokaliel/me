import * as S from "./styles";

import { Code } from "@phosphor-icons/react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";

import useNavbarAnimation from "./useNavbarAnimation";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import NavLink from "./navLinks";

export function Navbar() {
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

          <NavLink
            to="about"
            title="Sobre"
            icon={FaRegUser}
            activeSection={activeSection}
            isScroll={isScroll}
          />

          <NavLink
            to="projects"
            title="Projetos"
            icon={VscFileSubmodule}
            activeSection={activeSection}
            isScroll={isScroll}
          />

          <NavLink
            to="contact"
            title="Contato"
            icon={TiMessages}
            activeSection={activeSection}
            isScroll={isScroll}
            isLast
          />
        </S.Nav>
      </div>
    </S.Container>
  );
}
