import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import ProductFeature from "./features/Product";
import ProductListPage from "./features/Product/pages/ProductListPage";
import TodoFeature from "./features/Todo";
// import DetailPage from "./features/Todo/pages/DetailPage";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Product/pages/DetailPage";

function App() {
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
          <Route index element={<ProductListPage />}></Route>
          <Route path=":id" element={<DetailPage />}>
            <Route path="description" />
            <Route path="additional" />
            <Route path="reviews" />
          </Route>
        </Route>
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
