import logo from '@assets/logo.svg'
import { Image } from '@chakra-ui/react'

const ReactLogo = () => {
  return (
    <Image
      alt='React logo'
      className='logo react'
      src={logo}
    />
  )
}

export default ReactLogo
