import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { AnimatePresence } from "framer-motion";
import Register from "./pages/Register";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import VenuePage from "./pages/VenuePage";
import ContactPage from "./pages/ContactPage";
import Invited from "./pages/Invited";


function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/invited-speakers" element={<Invited />} />
                <Route path="/venue" element={<VenuePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
            </AnimatePresence>
        </BrowserRouter>
    </>
  );
}

export default App;
