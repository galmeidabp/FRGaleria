import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Info } from "./pages/Info";
import { MainLayout } from "./layout/MainLayout";
import { ArtDetails } from "./components/ArtDetails";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/obras/:slug" element={<ArtDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

