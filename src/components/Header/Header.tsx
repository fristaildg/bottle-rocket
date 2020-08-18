import React from 'react'
import styled from 'styled-components'
import mapIcon from './icon_map@2x.png'
import backIcon from './ic_webBack@2x.png'
import { useLocation, useHistory } from 'react-router-dom'

const StyledHeader = styled.header`
  background-color: #43E895;
  padding: 24px 12px 8px;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  position: sticky;
  top: 0;

  > * {
    text-align: center;
  }
`

const StyledH1 = styled.h1`
  font-size: 17px;
`

const StyledLogo = styled.img`
  width: 35px;
`

const BackBtnContainer = styled.div`
  min-width: 35px;
`

const StyledBackBtn = styled.img`
  height: 20px;

  @media (min-width: 1024px) {
    cursor: pointer;
    transition: padding-right 0.2s ease-in-out;
    padding-right: 0;

    &:hover {
      padding-right: 10px;
    }
  }
`

const Header = () => {
  const location = useLocation()
  const history = useHistory()
  const isRestaurantPage = location.pathname.includes('restaurant')
  const goBack = () => {
    history.goBack()
  }

  return (
    <StyledHeader>
      <BackBtnContainer>
        {isRestaurantPage && (
          <StyledBackBtn
            src={backIcon}
            alt="go back"
            onClick={goBack}
          />
        )}
      </BackBtnContainer>
      <StyledH1>
        Lunch Tyme
      </StyledH1>
      <StyledLogo src={mapIcon} alt="Lunch Tyme"/>
    </StyledHeader>
  )
}

export default Header
