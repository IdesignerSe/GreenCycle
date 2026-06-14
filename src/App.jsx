import "./styles/global.css";
import "./styles/theme.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px", minHeight: "70vh" }}>
        <Outlet />   {/* ⭐ This is where Login, Home, etc. will render */}
      </main>

      <Footer />
    </>
  );
}
