import '@styles/index.css'
import { createRoot } from 'react-dom/client'
import theme from '@lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import App from '@/App'

const Content = () => (
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Content />)
