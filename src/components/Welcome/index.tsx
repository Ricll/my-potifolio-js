import React from 'react'
import {
  useViewportScroll,
  useTransform,
  AnimateSharedLayout
} from 'framer-motion'
import {
  Container,
  Section,
  ProfileImg,
  WelcomeTitle,
  WelcomeTitleContainer,
  PortifolioText,
  PortifolioContainer
} from './styles'

import logo from '../../assets/react-logo.png'

const Welcome: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const ContainerPositiondScale = useTransform(
    scrollYProgress,
    [0.0, 0.022, 0.33, 0.05, 0.09],
    ['fixed', 'fixed', 'fixed', 'fixed', 'absolute']
  )

  const SectionWidhtScale = useTransform(
    scrollYProgress,
    [0.0, 0.002, 0.013],
    ['50%', '100%', '100%']
  )

  const WelcomeMarginLeftScale = useTransform(
    scrollYProgress,
    [0.0, 0.002],
    ['100%', '200%']
  )

  const WelcomeTextTransitionOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.002],
    ['0ms', '1500ms']
  )

  const WelcomeTextComeOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.002, 0.013],
    ['1', '0', '0']
  )

  const PortifolioOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.002, 0.013],
    ['0', '1', '1']
  )
  return (
    <Container style={{ position: ContainerPositiondScale }}>
      <Section
        style={{ width: SectionWidhtScale, transition: 'width 1.3s' }}
        transition={{ ease: 'easeOut' }}
      >
        <PortifolioContainer
          style={{ opacity: PortifolioOpacity, transition: '1000ms' }}
        >
          <ProfileImg
            src={logo}
            alt="profile"
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 2, loop: Infinity }}
          />
          <PortifolioText
            animate={{ opacity: [1, 0.2, 0.3, 0.4, 0.5, 1] }}
            transition={{ ease: 'linear', duration: 2, loop: Infinity }}
          >
            Olá, <br></br>Meu nome é Ricardo Lopes<br></br>
            Estou à procura de uma oportunidade como desenvolvedor junior.
            <br></br>
            Abaixo você pode ver alguns de meus projetos<br></br> Seta
          </PortifolioText>
        </PortifolioContainer>
        <WelcomeTitleContainer
          style={{ marginLeft: WelcomeMarginLeftScale, transition: '1000ms' }}
        >
          <WelcomeTitle
            style={{
              transition: WelcomeTextTransitionOpacity,
              opacity: WelcomeTextComeOpacity
            }}
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
