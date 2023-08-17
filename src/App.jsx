import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewP from './pages/ViewP'
import ViewS from './pages/ViewS'

function App () {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path='/view-1' element={<ViewP />} />
        <Route path='/view-2' element={<ViewS />} />
      </Route>
    </Routes>
  )
}

export default App
