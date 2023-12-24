import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Glossary from "../../pages/glossary/glossary";
import Header from "../header/header";
import SemanticGraph from "../../pages/semantic-graph/semantic-graph";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/glossary" element={<Glossary />}/>
        <Route path={"/semantic-graph"} element={<SemanticGraph />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

