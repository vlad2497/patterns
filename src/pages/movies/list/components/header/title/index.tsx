import { FC, ReactNode } from 'react'
import { Text } from './styles'

type Props = {
  children: ReactNode
}

const Title: FC<Props> = ({ children }) => {
  return (
    <Text variant="h1" color="neutral.black">
      {children}
    </Text>
  )
}

export default Title
