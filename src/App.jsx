import Container from '@mui/material/Container';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
function App() {

  return (
    <div className=" min-h-screen dark:bg-slate-900 bg-white px-5">
      <Container maxWidth="lg">
      <Header/>
      <HeroSection/>
      </Container>
      
    </div>
  )
}

export default App
