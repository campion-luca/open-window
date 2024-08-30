import MyNav from "./components/MyNav";
import Curiosities from "./components/Curiosities";
import Search from "./components/Search";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Extra from "./components/Extra"

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/curiosities" element={<Curiosities />} />

          <Route path="/searching" element={<Search />} />

          <Route path="/extra" element={<Extra />} />
        </Routes>
      </main>


      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
