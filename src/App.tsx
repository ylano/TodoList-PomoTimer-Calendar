import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
