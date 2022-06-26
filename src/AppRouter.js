import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livre from "./Livre";
import Livres from "./Livres";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Livres" component={Livres} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
