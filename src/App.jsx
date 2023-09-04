import { Route, Routes } from "react-router-dom";



import Header from "./layout/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />

      </Routes>
    </>
  );
}

export default App;
