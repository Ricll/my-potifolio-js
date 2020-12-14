import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import {
  Container,
  WelcomeSection,
  WelcomeContentSection,
  PortifolioHeader,
  PortifolioLeftContainer,
  PortifolioLeftTitle,
  PortifolioImage,
  PortifolioRightContainer,
  PortifolioDescription,
  PortifolioDescriptionContainer,
  WelcomeTitle,
  WelcomeTitleContainer
} from './styles'

import perfil from '../../assets/perfil.jpg'

const Welcome: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const [portifolioOpen, setPortifolioOpen] = useState(false)
  const [welcomeOpen, setWelcomeOpen] = useState(true)

  useEffect(() => {
    scrollYProgress.onChange(x => {
      setTimeout(showPortifolio, 1000)

      function showPortifolio() {
        setPortifolioOpen(x > 0.002)
        setWelcomeOpen(x > 0.002)
      }
    })
  }, [setPortifolioOpen, setWelcomeOpen])

  const ContainerPositionScale = useTransform(
    scrollYProgress,
    [0.0, 0.002, 0.03, 0.33],
    ['fixed', 'fixed', 'fixed', 'fixed     ']
  )

  const SectionWidhtScale = useTransform(
    scrollYProgress,
    [0.0, 0.002, 0.013],
    ['50%', '100%', '100%']
  )

  const WelcomeMarginLeftScale = useTransform(
    scrollYProgress,
    [0.0, 0.002],
    ['101.5%', '50%']
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
    [0.0, 0.0012, 0.0017],
    ['0', '0.7', '1']
  )
  return (
    <Container style={{ position: ContainerPositionScale }}>
      <WelcomeSection
        style={{ width: SectionWidhtScale, transition: 'width 1.2s' }}
      >
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
      </WelcomeSection>

      {portifolioOpen && (
        <WelcomeContentSection
          style={{ opacity: PortifolioOpacity, transition: '1000ms' }}
          transition={{ ease: 'easeOut' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.9, 1] }}
        >
          <PortifolioLeftContainer>
            <PortifolioHeader>
              <PortifolioImage src={perfil} alt="perfil" />
              <PortifolioLeftTitle>
                Ricardo Lopes<br></br> Sao Paulo - SP{' '}
              </PortifolioLeftTitle>
            </PortifolioHeader>
            <PortifolioDescriptionContainer>
              <PortifolioDescription>
                {' '}
                Olá, <br></br>Meu nome é Ricardo Lopes.<br></br>
                Tenho 45 anos, sou casado e estou à procura de uma oportunidade
                como desenvolvedor junior (React/React Native).
                <br></br>
                Recentemente concluí o bootcamp da Rocketseat e com este
                aprendizado criei alguns projetos para sua apreciaçao
              </PortifolioDescription>
            </PortifolioDescriptionContainer>
          </PortifolioLeftContainer>

          <PortifolioRightContainer>RIGHT</PortifolioRightContainer>
        </WelcomeContentSection>
      )}
    </Container>
  )
}

export default Welcome
