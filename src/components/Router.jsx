import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Inscription from '../pages/ConnexionInscription/Inscription';
import Connexion from '../pages/ConnexionInscription/Connexion';
import Categories from '../pages/Categories';
import Resultat from '../pages/Resultat';
import Quiz from '../pages/Quiz';
import Start from '../pages/Start';


const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Accueil/>}></Route>
            <Route path='/Categories' element={<Categories/>}></Route>
            <Route path='/Quiz/:categorie' element={<Quiz/>}></Route>
            <Route path='/Start' element={<Start/>}></Route>
            <Route path='/Resultat' element={<Resultat/>}></Route>
        </Routes>
    )
}


export default Router;