import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Schedule from "./pages/Schedule";
import Price from "./pages/Price";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import Header from "./components/Header";     

export default function App() {
 
  return (
    <Router>
      {/* Global background (image + beige tint) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593810450967-7fa7a1a8b7cc?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-[#d1b7a7]/70" />

      {/* Top navigation */}
      
      {/* Shared header (handles EN/FR toggle & translated nav labels) */}
      <Header />

    
      {/* Page content */}
      <main className="min-h-[calc(100vh-200px)]"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/price" element={<Price />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>

      {/* Shared footer */}
      <Footer />
    </Router>
  );
}
