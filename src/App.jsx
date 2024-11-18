import Container from '@mui/material/Container';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Divider from '@mui/material/Divider';
import Main from './components/Main';
function App() {

  return (
    <div className=" min-h-screen dark:bg-slate-900 bg-white px-5 ">
      <Container maxWidth="lg">
      <Header/>
      <HeroSection/>
      <Divider />
      <Main/>
      </Container>
      
      
    </div>
  )
}

export default App
