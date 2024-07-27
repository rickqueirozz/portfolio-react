import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/projetos" element={<Projetos/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes