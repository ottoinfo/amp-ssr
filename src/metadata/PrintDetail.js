/* @flow */

import React, { Fragment } from 'react'

import JsonSchema from './JsonSchema'
import { type ArtDetailResponse } from '../types'

const schema = {
  '@context': 'http://schema.org',
  '@type': 'NewsArticle',
  headline: 'Open-source framework for publishing content',
  datePublished: '2015-10-07T12:02:41Z',
  image: ['logo.jpg'],
}

type Props = ArtDetailResponse & {
  url: string,
}

export default (props: Props) => {
  const {
    artwork: { title },
    url,
  } = props
  return (
    <Fragment>
      <title>
        Print Detail -
        {title}
      </title>
      <link rel='canonical' href={url} />
      <JsonSchema schema={schema} />
    </Fragment>
  )
}
