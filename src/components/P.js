/* @flow */

// TODO - This is a crap file

import React from 'react'
import styled from 'styled-components'

// Our single Styled Component definition
const wrapper = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = { children: React$Element<*> }

export default (props: Props) => {
  const { children } = props
  return <wrapper>{children}</wrapper>
}
