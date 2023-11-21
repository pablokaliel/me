
import { Anchor } from '@phosphor-icons/react'
import * as S from './styles'
import  useNavbarAnimation  from './useNavbarAnimation'

export function Navbar() {
  const { isScroll } = useNavbarAnimation()
  return (
    <S.Container data-scroll-active={isScroll}>
        <div>

        <S.Logo data-scroll-active={isScroll}>
          <a href="#">
          <Anchor style={{ transition: 'width 0.36s ease-in-out, height 0.36s ease-in-out' }} size={isScroll ? 40 : 60}  weight="fill" color='#fff'/>
          </a>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
          <a href="#about">sobre</a>
          <a href="#projects">projetos</a>
          <a href="#contact">contato</a>
        </S.Nav>
        </div>

    </S.Container>
  )
}