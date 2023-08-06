import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Gellary from './components/Gellary'
import Information from './components/Information'

function App() {

  return (
    <>
      <Link to={'/'} className="title">
        <h1 >Image Gellary</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Gellary />} />
        <Route path='/:id' element={<Information />} />
      </Routes>
    </>
  )
}

export default App
