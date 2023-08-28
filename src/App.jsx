import './App.css'
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/register' element={<Register/> } />
      </Routes>
    </>
  )
}

export default App;
