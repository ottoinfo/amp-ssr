/* @flow */

import React, { Fragment } from 'react'

type Props = { url: string }

export default (props: Props) => {
  const { url } = props
  return (
    <Fragment>
      <title>Error</title>
      <link rel='canonical' href={url} />
    </Fragment>
  )
}
