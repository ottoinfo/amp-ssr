/* @flow */

import SSR, { type Props } from '../ssr'
import App from '../apps/PrintDetail'
import Metadata from '../metadata/PrintDetail'

export default (props: Object) => SSR(({ App, Metadata, props }: Props))
