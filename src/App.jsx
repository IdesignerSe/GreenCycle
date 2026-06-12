import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/theme.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TakeAway from "./pages/TakeAway";
import SecondHand from "./pages/SecondHand";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/takeaway"
            element={
              <PrivateRoute>
                <TakeAway />
              </PrivateRoute>
            }
          />

          <Route
            path="/secondhand"
            element={
              <PrivateRoute>
                <SecondHand />
              </PrivateRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
