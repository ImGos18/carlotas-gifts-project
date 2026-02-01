import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./Pages/HomePage/HomePage";
import Catalog from "./Pages/Catalog/Catalog";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={"/Catalog"} element={<Catalog />}>
            <Route path="Catalog/:id" />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
