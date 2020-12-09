import React from 'react'

import {
  Container,
  MenuTitle,
  MenuIcons,
  MenuTitleContent,
  MenuIconsContent
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <MenuTitleContent>
        <MenuTitle>RICKIE DEV *</MenuTitle>
      </MenuTitleContent>

      <MenuIconsContent>
        <MenuIcons>M</MenuIcons>
        <MenuIcons>G</MenuIcons>
      </MenuIconsContent>
    </Container>
  )
}

export default Header
