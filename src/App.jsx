import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import Academy from "./pages/Academy";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
