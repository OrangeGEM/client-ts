import React from 'react'
import { Container, Content } from './styled'
import logo from '../../../assets/images/landing/logo.svg';
import { ButtonPattern } from '../../../global/styles/buttons.styled';
import { EpilogueText } from '../../../global/styles/fonts.styled';
import { colors } from '../../../global/params/colors';

export default function Header() {

  return (
    <Container>
        <Content>
            <img src={logo} alt="logo" />
            <ButtonPattern background="rgba(255, 169, 49, 0.1)" width="150px" height="40px">
              <EpilogueText fontSize="15px" textAlign="center" fontWeight="bold" color={colors.orange}> MY QUEUES </EpilogueText>
            </ButtonPattern>
        </Content>
    </Container>
  )
}