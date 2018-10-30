/* @flow */

import SSR, { type Props } from '../ssr'
import App from '../apps/Error'
import Metadata from '../metadata/Error'

export default (props: Object) => SSR(({ App, Metadata, props }: Props))
