import "./App.css";
import Cards from "./components/Cards";
import CartsDetails from "./components/CartsDetails";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/carts/:id" element={<CartsDetails />} />
      </Routes>
    </>
  );
}

export default App;
