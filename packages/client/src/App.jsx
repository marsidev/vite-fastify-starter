import { useState } from 'react'
import 'isomorphic-fetch'
import { Button, Stack, Heading } from '@chakra-ui/react'
import ReactLogo from '@components/ReactLogo'
import LearnButton from '@components/LearnButton'
import AppContainer from '@components/AppContainer'
import { FaGithub } from 'react-icons/fa'
import { SiChakraui, SiVite, SiReact, SiFastify } from 'react-icons/si'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')

  const fetchData = async () => {
    const data = await fetch('/api/hello').then(r => r.json())
    setData(data)
  }

  return (
    <AppContainer>
      <Heading
        bgClip='text'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        fontSize='4xl'
        fontWeight='extrabold'
        textAlign='center'
      >
        Fastify + React + Vite + Chakra UI starter!
      </Heading>

      <Stack align='center' direction='row' py={4} spacing={4}>
        <Button
          colorScheme='pink'
          ml={2}
          zIndex={4}
          onClick={() => setCount(count => count + 1)}
        >
          Counter is: {count}
        </Button>

        <Button colorScheme='pink' ml={2} onClick={fetchData}>
          {data ? JSON.stringify(data) : 'Fetch API data'}
        </Button>
      </Stack>

      <ReactLogo />

      <Stack align='center' direction={['column', 'row']} mt={16} spacing={4}>
        <LearnButton
          bg='#000'
          content='Learn Fastify'
          href='https://www.fastify.io/docs/latest/'
          icon={<SiFastify />}
        />

        <LearnButton
          bg='cyan.400'
          content='Learn React'
          href='https://reactjs.org'
          icon={<SiReact />}
        />

        <LearnButton
          bg='#646CFF'
          content='Learn Vite'
          href='https://vitejs.dev/guide/features.html'
          icon={<SiVite />}
        />

        <LearnButton
          bg='teal.500'
          content='Learn Chakra UI'
          href='https://chakra-ui.com'
          icon={<SiChakraui />}
        />
      </Stack>

      <LearnButton
        bg='#000'
        content='GitHub'
        href='https://github.com/marsidev/vite-fastify-starter'
        icon={<FaGithub />}
        mt={4}
      />
    </AppContainer>
  )
}

export default App
