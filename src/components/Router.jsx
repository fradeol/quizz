import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Categories from "../pages/Categories";
import Resultat from "../pages/Resultat";
import Quiz from "../pages/Quiz";
import Start from "../pages/Start";
import Private from "../pages/Private/Private";
import Home from '../pages/Private/Home';
import Profil from '../pages/Private/Profil';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />}></Route>
      <Route path="/Private" element={<Private />}>
        <Route path="/Private/Home" element={<Home />}></Route>
        <Route path="/Private/Profil" element={<Profil />}></Route>
      </Route>

      <Route path="/Categories" element={<Categories />}></Route>
      <Route path="/Quiz/:categorie" element={<Quiz />}></Route>
      <Route path="/Start/:categorie" element={<Start />}></Route>
      <Route path="/Resultat" element={<Resultat />}></Route>
    </Routes>
  );
};

export default Router;
