import React from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'
import {
  Container,
  Section,
  WelcomeTitle,
  WelcomeTitleContainer,
  PortifolioText,
  PortifolioContainer
} from './styles'

import logo from '../../assets/reactandnative.jpeg'
import profile from '../../assets/perfil.jpg'

const Welcome: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const ContainerPositiondScale = useTransform(
    scrollYProgress,
    [0.0, 0.172, 0.187, 0.2, 0.25],
    ['fixed', 'fixed', 'fixed', 'fixed', 'absolute']
  )

  const SectionWidhtScale = useTransform(
    scrollYProgress,
    [0.0, 0.112, 0.115],
    ['47vw', '47vw', '94vw']
  )

  const WelcomeMarginLeftScale = useTransform(
    scrollYProgress,
    [0.0, 0.112],
    ['100%', '200%']
  )

  const WelcomeTextTransitionOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.112],
    ['0ms', '1500ms']
  )

  const WelcomeTextComeOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.117, 0.126],
    ['1', '0.9', '0']
  )

  const ProtifolioOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.117, 0.126],
    ['0', '0.9', '1']
  )
  return (
    <Container style={{ position: ContainerPositiondScale }}>
      <Section
        style={{ width: SectionWidhtScale, transition: 'width 1.3s' }}
        transition={{ ease: 'easeOut' }}
      >
        <PortifolioContainer
          style={{ opacity: ProtifolioOpacity, transition: '1300ms' }}
        >
          <img
            src={profile}
            alt="profile"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
          <PortifolioText>
            Olá, <br></br>Meu nome é Ricardo Lopes<br></br>
            Estou à procura de uma oportunidade como desenvolvedor junior.
            <br></br>
            Abaixo você pode ver alguns de meus projetos<br></br> Seta
          </PortifolioText>
        </PortifolioContainer>
        <WelcomeTitleContainer
          style={{ marginLeft: WelcomeMarginLeftScale, transition: '1500ms' }}
        >
          <WelcomeTitle
            transition={{ ease: 'easeOut', duration: 2.3 }}
            initial={{ y: -35 * 8.2, scale: 2 }}
            animate={{ y: 0, scale: [1, 1.5, 1] }}
          >
            WEL
          </WelcomeTitle>
          <WelcomeTitle
            style={{
              transition: WelcomeTextTransitionOpacity,
              opacity: WelcomeTextComeOpacity
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            C
          </WelcomeTitle>
          <WelcomeTitle
            style={{
              transition: WelcomeTextTransitionOpacity,
              opacity: WelcomeTextComeOpacity
            }}
            transition={{ ease: 'easeOut', duration: 2.3 }}
            initial={{ y: 35 * 8.2, scale: 2 }}
            animate={{ y: 0, scale: [1, 1.5, 1] }}
          >
            OME
          </WelcomeTitle>
        </WelcomeTitleContainer>
      </Section>
    </Container>
  )
}

export default Welcome
