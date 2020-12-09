import React from 'react'

import Header from '../components/Header'
import Welcome from '../components/Welcome'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Welcome />
    </Container>
  )
}

export default Home
