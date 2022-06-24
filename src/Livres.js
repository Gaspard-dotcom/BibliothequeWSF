import React from "react";
import data from "./db.json";
import Livre from "./Livre";
import './Livre.css';
import './Livres.css';


const Livres = () =>  {
  const spaces = data.map((obj) => {
    const name = obj.name;
    const address = obj.address;
    const images = obj.images;

    return (
    <Livre name={name} address={address} image={images[0]} />
    )

  })


  return (
    <div className="Livres">

        {spaces}</div>

  );
}

export default Livres;
