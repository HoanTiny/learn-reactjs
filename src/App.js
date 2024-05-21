import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import productApi from "./api/productApi";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import TodoFeature from "./features/Todo";
import DetailPage from "./features/Todo/pages/DetailPage";
import ListPage from "./features/Todo/pages/ListPage";
import ProductFeature from "./features/Product";
import ProductListPage from "./features/Product/pages/ProductListPage";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(`productList`, productList);
    };

    fetchProducts();
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/todos" element={<TodoFeature />}>
          <Route path="listpage" element={<ListPage />}></Route>
          <Route path="detail-page" element={<DetailPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/products" element={<ProductFeature />}>
          <Route path="" element={<ProductListPage />} />
        </Route>
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
