import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Login from './components/Login';
import Layout from './components/Layout';
import Register from './components/Register';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
