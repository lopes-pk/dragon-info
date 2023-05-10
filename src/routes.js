import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./pages/SobreMim";
import MenuNav from "./components/MenuNav";
import PaginaPadrao from './components/PaginaPadrao'
import Inicio from "./pages/Inicio";
import CharInfo from "./pages/CharInfo";



export default function App() {
  return (
      <BrowserRouter>
        <MenuNav />
        <Routes >
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='sobremim' element={<SobreMim />} />
          </Route>
          <Route path="char/:id/*" element={<CharInfo/>} />
        </Routes>
      </BrowserRouter>
  );
}