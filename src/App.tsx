import Home from "pages/home";
import Product from "pages/product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
    </Routes>
  );
};

export default App;
