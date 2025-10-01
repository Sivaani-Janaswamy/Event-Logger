import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      minH="100vh" 
      bg={useColorModeValue("yellow.300", "cyan.600")}
    >
      <Navbar />

      {/* Main content grows to fill space */}
      <Box flex="1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  )
}

export default App
