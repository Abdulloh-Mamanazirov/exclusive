import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/";
import { About, Cart, Contact, Home, Wishlist } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
