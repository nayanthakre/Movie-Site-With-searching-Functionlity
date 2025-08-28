
import './App.css'
import NavBar from './component/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
   <div>
    <NavBar></NavBar>
 <main className='main-contnent'>
  <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/favorites" element={<Favorites />} />

  </Routes>
 </main>
   </div>
  )
}


export default App
