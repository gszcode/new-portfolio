import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <main className="main" id="home">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
