/* @flow */

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { AMP } from 'react-amp-template'

import theme from '../theme'
import Img from '../components/Img'
import { type ArtDetailResponse } from '../types'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: ${props => props.theme.fontSizes[3]}px;
`

type Props = ArtDetailResponse

export default (props: Props) => {
  const {
    artist: { avatar, firstName, lastName },
  } = props
  const userName = `${firstName} ${lastName}`
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <p>
          Print Detail -
          {userName}
        </p>
        <amp-img src={avatar} alt={userName} width='200' height='200' layout='responsive' />
        <Img src='https://placekitten.com/g/500/300' width='500' height='300' />
        <Img src='https://placekitten.com/g/500/300' width='500' height='300' blue />
        <Img src='https://placekitten.com/g/500/300' width='500' height='300' pink />
      </Wrapper>
    </ThemeProvider>
  )
}
