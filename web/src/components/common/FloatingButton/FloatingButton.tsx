import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

interface Props {
  onClick: () => void
}

const FloatingButton = ({ onClick }: Props) => {
  return (
    <IconButton
      position="fixed"
      bottom="120px"
      right="40px"
      borderRadius="100%"
      backgroundColor="white"
      icon={<AddIcon onClick={onClick} />}
      aria-label=""
    />
  )
}

export default FloatingButton
