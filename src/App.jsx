import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { SearchProvider } from './contexts/SearchContext'
import { CartProvider } from './contexts/CartContext'
import { Cart } from './components/Cart'

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />
      </CartProvider>
        <ResultInfoBar />
        <div className='content-ResultandFilter'>
          <Filter/>
          <ResultTable />
          <CartProvider>
            <Cart />
          </CartProvider>
        </div>
    </SearchProvider>
  )
}

export default App
