import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './public/login'
import { Register } from './public/register'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App