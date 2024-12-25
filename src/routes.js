import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
