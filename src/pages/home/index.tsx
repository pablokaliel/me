
import * as S from './styles'

import type { Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import { optionsParticles } from '../../components/optionsParticles'
import { Navbar } from '../../components/header'


export function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async () => {},
    []
  )
  return (
    <S.Container>
        <S.Content>
          <Navbar/>
          <div>

          ola
          </div>
        </S.Content>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionsParticles}
        />
    </S.Container>
  )
}