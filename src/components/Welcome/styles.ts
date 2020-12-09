import styled from 'styled-components'
import { motion } from 'framer-motion'
import px2vw from '../../utils/px2vw'
import logo from '../../assets/reactback.png'

export const Container = styled(motion.div)`
  display: collumn;
  flex-wrap: wrap;
  margin-top: ${px2vw(30)};
  margin-left: ${px2vw(20)};
  width: 95%;
  height: 90%;
  z-index: -1;
  background-color: #f1f2f6;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`

export const Section = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: ${px2vw(1354)};
  height: 100%;
  background-color: #282c34;
`

export const ProfileImg = styled(motion.img)`
  width: 200px;
  height: 200px;

  @media only screen and (max-width: 425px) {
    width: 100px;
    height: 100px;
  }
`

export const WelcomeTitleContainer = styled(motion.div)`
  display: flex;
  width: 80%;
  height: 20%;

  justify-content: center;
  align-items: center;
`

export const WelcomeTitle = styled(motion.h1)`
  font-size: 9rem;
  font-family: 'Oswald';
  font-weight: 600;
  color: #ff5851;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 425px) {
    font-size: 5rem;
  }
`
export const PortifolioContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  // background: url(${logo});
  background-position: center;
  background-color: #282c34;

  box-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
`

export const PortifolioTextContainer = styled(motion.div)``

export const PortifolioText = styled(motion.h1)`
  font-family: 'Oswald';
  margin-left: 5%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.04em;

  @media only screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`
