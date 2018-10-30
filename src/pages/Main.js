/* @flow */

import SSR, { type Props } from '../ssr'
import App from '../apps/Main'
import Metadata from '../metadata/Main'

export default (props: Object) => SSR(({ App, Metadata, props }: Props))
