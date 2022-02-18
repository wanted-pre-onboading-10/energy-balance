import NavBar from "components/nav-bar";
import Home from "pages/home";
import Product from "pages/product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
