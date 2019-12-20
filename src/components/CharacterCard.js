import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  return (
    <div>
      <Link to={`/character/${props.id}`}>
        <h1> Name: {props.name}</h1>
      </Link>
      <h3>Species: {props.species} </h3>
      <h3>Status: {props.status} </h3>
    </div>
  );
}
