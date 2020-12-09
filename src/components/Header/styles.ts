import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  margin-left: 1.3%;
  background-color: #fff;
  width: 100%;
  height: 7%;
  position: fixed;
  max-width: 100%;
  top: 0;
`

export const MenuIconsContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45%;
`

export const MenuIcons = styled.nav`
  font-family: 'Oswald';
  margin-left: 1vw;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  @media only screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`

export const MenuTitleContent = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`

export const MenuTitle = styled.nav`
  font-family: 'Oswald';
  letter-spacing: 0.04em;
  font-size: 1rem;
  font-weight: 500;
  color: #000;

  @media only screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`
