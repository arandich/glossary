import React from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import './glossary.css'
import glossary from "../../const/glossary";

export default function Glossary(): React.JSX.Element {

  return(
    <>
      <Header/>
      <div className="card-list">
        {glossary.map((item) => (
          <Card word={item.word} description={item.description} key={item.id}/>
        ))}
      </div>
    </>
  )
}
