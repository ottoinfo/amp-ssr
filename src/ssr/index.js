/* @flow */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import Html from './Html'

export type Props = {
  App: React$ComponentType<*>,
  Metadata: React$ComponentType<*>,
  props: Object,
}

// SSR -> Pass in a App and Metadata
export default ({ App, Metadata, props }: Props) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(<App {...props || {}} />).replace(/classname/gi, 'class')
  const styles = sheet.getStyleTags().replace('<style', '<style amp-custom') // inject amp-custom into style
  const metadata = renderToString(<Metadata {...props || {}} />)
  return Html({
    body,
    styles,
    metadata,
  })
}
