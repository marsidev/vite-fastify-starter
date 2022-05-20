import { Flex } from '@chakra-ui/react'

function App({ children }) {
  return (
    <Flex
      alignItems='center'
      bg='gray.800'
      color='white'
      display='flex'
      flexDir='column'
      justify='center'
      minH='100vh'
    >
      {children}
    </Flex>
  )
}

export default App
