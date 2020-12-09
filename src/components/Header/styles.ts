import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  display: flex;

  justify-content: center;
  margin-left: ${px2vw(20)};
  height: ${px2vw(45)};
  flex-wrap: wrap;
  position: fixed;
  max-width: 100%;
  top: 0;
  background-color: #fff;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`

export const MenuIconsContent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${px2vw(10)};
  width: ${px2vw(320, 320)};

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};

    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(670)};
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuIcons = styled.nav`
  font-family: 'Oswald';
  margin-left: 1vw;
  font-size: 1.05rem;
  font-weight: 500;
  color: #000;
`

export const MenuTitleContent = styled.div`
  display: flex;
  padding-top: ${px2vw(10)};
  width: ${px2vw(420, 420)};

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};

    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(684)};
    height: 100%;
  }
`

export const MenuTitle = styled.nav`
  font-family: 'Oswald';

  letter-spacing: 0.03em;
  font-size: 1.05rem;
  font-weight: 500;
  color: #000;
`
