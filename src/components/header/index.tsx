import { Code } from "@phosphor-icons/react";
import * as S from "./styles";
import useNavbarAnimation from "./useNavbarAnimation";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";

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
              style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 40 : 60}
            />
          </a>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
          <a
            href="#home"
            style={{ color: activeSection === "home" ? "#7440aa" : "#fff" }}
          >
            <IoHomeOutline  style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 16 : 20}
             />
            Inicio
          </a>
          <div
            style={{
              width: 40,
              background: "#ffffff6a",
              borderRadius: 5,
              height: 1,
            }}
          />
          <a
            href="#about"
            style={{ color: activeSection === "about" ? "#7440aa" : "#fff" }}
          >
            <FaRegUser  style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 16 : 20}
             /> sobre
          </a>
          <div
            style={{
              width: 40,
              background: "#ffffff6a",
              borderRadius: 5,
              height: 1,
            }}
          />

          <a href="#projects">
            <VscFileSubmodule  style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 16 : 20}
             />
            projetos
          </a>
          <div
            style={{
              width: 40,
              background: "#ffffff6a",
              borderRadius: 5,
              height: 1,
            }}
          />
          <a href="#contact">
            <TiMessages  style={{
                transition: "width 0.36s ease-in-out, height 0.36s ease-in-out",
              }}
              size={isScroll ? 16 : 20}
             />
            contato
          </a>
        </S.Nav>
      </div>
    </S.Container>
  );
}
