import React from 'react'
import { colors } from '../../global/params/colors';

import Header from './Header/Header';
import Main from './Main/Main';

import { Container, Content } from './styled'

export default function Landing() {

  return (
    <Container>
      <Content>
        <Header />
        <Main />
      </Content>
    </Container> 
  )
}