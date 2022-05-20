import { Link, Button } from '@chakra-ui/react'
import { BiRightArrowAlt as RightArrow } from 'react-icons/bi'

const LearnButton = ({ href, content, bg, icon, ...rest }) => {
  return (
    <Button
      isExternal
      _active={{
        textDecoration: 'none',
        filter: 'brightness(85%)'
      }}
      _hover={{
        textDecoration: 'none',
        filter: 'brightness(90%)'
      }}
      as={Link}
      bg={bg}
      href={href}
      leftIcon={icon || <RightArrow />}
      transition='all 0.2s'
      variant='solid'
      {...rest}
    >
      {content}
    </Button>
  )
}

export default LearnButton
