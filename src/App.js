import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import { useEffect } from "react";
import productApi from "./api/productApi";

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
      <h1>HOÀN</h1>
      <Link to="/todos">Todo</Link>
      <Link to="/albums">Albums</Link>
      <br />
      <Routes>
        <Route path="/" />
        <Route path="/todos" element={<TodoFeature />}>
          <Route path="listpage" element={<ListPage />}></Route>
          <Route path="detail-page" element={<DetailPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
