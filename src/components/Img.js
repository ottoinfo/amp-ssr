/* @flow */

import React from 'react'
import styled from 'styled-components'

const Img = styled('amp-img')`
  border: 5px solid black;
  padding: 50px;
  ${props => props.pink && `border-color: pink;`};
  ${props => props.blue && `border-color: blue;`};
`

type Props = { [string]: string }

export default (props: Props) => <Img {...props} />
