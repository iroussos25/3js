import Canvas from "./canvas/Index"
import Customizer from "./Customizer"
import Home from "./assets/pages/Home"

function App() {

  return (
  <main className="app transition-all ease-in">
    <Home />
    <Canvas />
    <Customizer />
  </main>
  )
}

export default App
