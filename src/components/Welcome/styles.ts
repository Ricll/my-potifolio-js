import styled from 'styled-components'
import { motion } from 'framer-motion'
import px2vw from '../../utils/px2vw'
import logo from '../../assets/reactback.png'

export const Container = styled(motion.div)`
  display: collumn;

  margin-top: ${px2vw(30)};
  margin-left: ${px2vw(20)};
  width: ${px2vw(1354)};
  height: ${px2vw(600)};
  z-index: -1;
  background-color: #f1f2f6;
`

export const Section = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: ${px2vw(1354)};
  height: ${px2vw(600)};
  background-color: #ff5851;
`

export const WelcomeTitleContainer = styled(motion.div)`
  display: flex;

  width: ${px2vw(450)};
  height: ${px2vw(180)};

  justify-content: center;
  align-items: center;
`

export const WelcomeTitle = styled(motion.h1)`
  font-size: 8rem;
  font-family: 'Oswald';
  font-weight: 600;
  color: #2c3a47;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
`
export const PortifolioContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 1;
  width: ${px2vw(1353)};
  height: ${px2vw(600)};
  align-items: center;
  justify-content: center;
  background: url(${logo});
  background-position: center;
  //background-color: #000;

  box-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
`

export const PortifolioTextContainer = styled(motion.div)``

export const PortifolioText = styled(motion.h1)`
  font-family: 'Oswald';
  margin-left: 5%;
  color: #fff;
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0.03em;
`
