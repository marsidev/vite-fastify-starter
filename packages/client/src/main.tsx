import '@styles/index.css'
import 'isomorphic-fetch'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import theme from '@lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import App from '@/App'

const Content = () => (
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(<Content />)
