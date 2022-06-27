import * as React from "react";
import { Routes, Route } from "react-router";
import MainPageMenu from "../Pages/MainPageMenu/MainPageMenu";
import ChooseCatPage from "../Pages/ChooseCat/ChooseCatPage.jsx";
import Header from "../Header/Header";
import CatWikiPage from "../Pages/CatWikiPage/CatWikiPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPageMenu />} />
        <Route path="/rntcat" element={<ChooseCatPage />} />
        <Route path="/catwiki" element={<CatWikiPage />} />
      </Route>
    </Routes>
  );
};
export default App;
