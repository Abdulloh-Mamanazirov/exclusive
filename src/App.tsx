import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/";
import { Home, Wishlist } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
