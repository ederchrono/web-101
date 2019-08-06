import welcome from '~/slides/welcome.mdx'
import intro from '~/slides/intro.mdx'
import importance from '~/slides/importance.mdx'
import examples from '~/slides/examples.mdx'
import communication from '~/slides/communication.mdx'
import final from '~/slides/final.mdx'

export { default as theme } from './wizeline-theme'
export default [
  ...welcome,
  ...intro,
  ...importance,
  ...examples,
  ...communication,
  ...final
]
