import * as S from "./styles";

import { Code } from "@phosphor-icons/react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";

import useNavbarAnimation from "./useNavbarAnimation";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

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
          <a href="#home">
            <Code
              style={{ transition: "width 0.36s ease-in-out, height 0.36s ease-in-out" }}
              size={isScroll ? 40 : 60}
            />
          </a>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={600}
            style={{ color: activeSection === "home" ? "#7440aa" : "#fff", cursor: "pointer", }}
          >
            <IoHomeOutline
              style={{ transition: "width 0.36s ease-in-out, height 0.36s ease-in-out", }}
              size={isScroll ? 16 : 20}
            />
            Inicio
          </Link>
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={600}
            style={{ color: activeSection === "about" ? "#7440aa" : "#fff",  cursor: "pointer" }}
          >
            <FaRegUser
              style={{ transition: "width 0.36s ease-in-out, height 0.36s ease-in-out", }}
              size={isScroll ? 16 : 20}
            />
            sobre
          </Link>
          <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={600}
            style={{ color: activeSection === "projects" ? "#7440aa" : "#fff", cursor: "pointer", }}
          >
            <VscFileSubmodule
              style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 16 : 20}
            />
            projetos
          </Link>
          <div
            style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1, }}
          />

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={600}
            style={{ color: activeSection === "contact" ? "#7440aa" : "#fff", cursor: "pointer" }}
          >
            <TiMessages size={isScroll ? 16 : 20} />
            contato
          </Link>
        </S.Nav>
      </div>
    </S.Container>
  );
}
