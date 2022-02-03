import React from 'react'

import { DMMonoText, EpilogueText } from '../../../../../global/styles/fonts.styled'
import { Container, Content, DirectionalContainer } from './styled'
import { useTranslation } from 'react-i18next'
import { ButtonPattern } from '../../../../../global/styles/buttons.styled';
import { colors } from '../../../../../global/params/colors';
import { ColumnContainer, RowContainer } from '../../../../../global/styles/containers.styled';
import topImage from '../../../../../assets/images/landing/top-main.svg';

export default function TopMain() {
  const { t, i18n } = useTranslation();


  return (
    <Container>
      <Content>
        <DirectionalContainer>

          <ColumnContainer style={{justifyContent: "center", width:"42%", zIndex: 1}}> 
            <EpilogueText
              fontWeight="bold"
              fontSize="62px"
              lineHeight="64px"
              style={{whiteSpace: "nowrap"}}
            > {t('common:landing.getStarted.title')} </EpilogueText>

            <DMMonoText
              fontSize="26px"
              lineHeight="155%"
              style={{margin: "60px 0px"}}
            >
              {t('common:landing.getStarted.description')}
            </DMMonoText>

            <ButtonPattern width="268px" height="56px">
              <EpilogueText
                color={colors.white}
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="18px"
              > {t('common:default_stated')} </EpilogueText>
            </ButtonPattern>
          </ColumnContainer>

          <img src={topImage} style={{ width: '43%', marginTop:"60px"}} />
        </DirectionalContainer>
      </Content>
    </Container>
  )
}