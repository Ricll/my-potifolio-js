import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: -1;
  flex-direction: row;
  margin-top: 35px;
  margin-left: 20px;
  width: 95%;
  height: 90%;

  background-color: #f1f2f6;

  @media only screen and (max-width: 425px) {
    margin-left: 0px;

    margin-top: 0px;
  }
`

export const WelcomeSection = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: -1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #282c34;
`
export const WelcomeContentSection = styled(motion.div)`
  display: flex;

  width: 100%;
  max-width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const PortifolioLeftContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;

  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const PortifolioRightContainer = styled(motion.div)`
  display: flex;
  box-sizing: content-box;
  width: 50%;
  background-color: purple;
`

export const PortifolioHeader = styled(motion.header)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 10px;
  border: 2px solid #000;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PortifolioImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #737782;

  @media (max-width: 800px) {
    width: 80px;
    height: 80px;
  }
`

export const PortifolioLeftTitle = styled(motion.h1)`
  text-align: center;
  text-shadow: 2px 2px #000;
  font-family: 'Oswald';
  color: #f1f2f6;
  font-weight: 600;
  font-size: 2.3rem;
  margin-left: 5px;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`
export const PortifolioDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-grow: 25;
  justify-content: center;
  padding: 10px;

  background-color: grey;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
  }
`

export const PortifolioDescription = styled(motion.h1)`
  text-align: center;
  font-family: 'Oswald';
  color: #f1f2f6;
  font-weight: 600;
  font-size: 1.3rem;
  margin-left: 5px;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`
export const WelcomeTitleContainer = styled(motion.div)`
  display: flex;
  width: 90%;
  height: 30%;
  align-items: center;
  justify-content: center;
`

export const WelcomeTitle = styled(motion.h1)`
  font-size: 9rem;
  font-family: 'Oswald';
  font-weight: 600;
  color: #ff5851;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 425px) {
    font-size: 4.5rem;
  }
`
