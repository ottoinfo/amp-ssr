/* @flow */

import React from 'react'

type Props = { schema: Object }

export function injectJson (schema: Object) {
  return {
    __html: JSON.stringify(schema),
  }
}

export default function JsonSchema ({ schema }: Props) {
  return <script type='application/ld+json' dangerouslySetInnerHTML={injectJson(schema)} />
}
