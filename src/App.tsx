import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ListaVagas />
      <EstiloGlobal />
    </>
  )
}

export default App
