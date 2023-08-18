import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryPage from './pages/CountryPage'
import CountryCardSearch from './components/CountryCardSearch'
import ViewP from './pages/ViewP'
import ViewS from './pages/ViewS'

function App () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/1' element={<CountryCardSearch />} />
      <Route path='/:id' element={<CountryPage />} />
      <Route path='/view-1' element={<ViewP />} />
      <Route path='/view-2' element={<ViewS />} />
    </Routes>
  )
}

export default App
