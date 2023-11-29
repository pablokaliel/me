import * as S from "./styles";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import { useCallback } from "react";

import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";

import SwapperProfile from "../../components/profile";
import SwapperMe from "../../components/me";
import SwapperProjects from "../../components/projects";

export function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <S.Container>
      <Navbar />
      <S.Content id="home">
        <SwapperProfile />
      </S.Content>

      <S.ContentMe id="about">
        <SwapperMe />
      </S.ContentMe>

      <SwapperProjects />

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </S.Container>
  );
}
