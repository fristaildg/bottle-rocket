import React from 'react'
import styled from 'styled-components'
import mapIcon from './icon_map@2x.png'

const StyledHeader = styled.header`
  background-color: #43E895;
  padding: 20px;
  padding-top: 40px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledH1 = styled.h1`
  font-size: 17px;
`

const StyledLogo = styled.img`
  width: 35px;
  height: auto;
  position: absolute;
  right: 0;
  margin-right: 20px;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>
        Lunch Tyme
      </StyledH1>
      <StyledLogo src={mapIcon} alt="Lunch Tyme"/>
    </StyledHeader>
  )
}

export default Header
