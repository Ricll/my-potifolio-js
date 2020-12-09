import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  display: collumn;
  flex-wrap: wrap;
  margin: ${px2vw(15)};
  height: 1400vw;
  max-width: 100%;
  opacity: 0.82;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`
