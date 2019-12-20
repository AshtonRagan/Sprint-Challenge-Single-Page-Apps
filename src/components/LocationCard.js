import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SingleCard } from "./style";
import Axios from "axios";

export default function LocationCard() {
  const [char, getchar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        getchar(res.data);
        console.log("The char:", res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SingleCard>
        <img src={char.image} />
        <h1>Name: {char.name}</h1>
        <h2>Status: {char.status} </h2>
        <h3>Gender: {char.gender}</h3>
        <h3>Species: {char.species}</h3>
        <Link to="/">
          <button>Back</button>
        </Link>
      </SingleCard>
    </div>
  );
}
