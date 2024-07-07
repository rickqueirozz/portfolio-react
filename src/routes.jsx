import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes