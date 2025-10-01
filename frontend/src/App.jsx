import { Box, useColorModeValue } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("yellow.300", "cyan.600")}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
