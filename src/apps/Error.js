/* @flow */

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`

type Props = {
  url: string,
}

export default (props: Props) => {
  const { url } = props
  return (
    <Wrapper>
      <h1>
        ERROR PAGE -
        {url}
      </h1>
    </Wrapper>
  )
}
