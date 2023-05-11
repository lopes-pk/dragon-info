import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginaPadrao from './components/PaginaPadrao'
import Inicio from "./pages/Inicio";
import CharInfo from "./pages/CharInfo";
import Franquia from "./pages/Franquia";
import NotFound from "./pages/NotFound";



export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='franquia' element={<Franquia />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="char/:id" element={<CharInfo />} />
      </Routes>
    </BrowserRouter>
  );
}