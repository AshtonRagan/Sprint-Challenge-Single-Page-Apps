import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import { MainCard } from "./style";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [chars, getChars] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res);

        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        // console.log("harry potter characters", response);
        console.log(characters);

        getChars(characters);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <input
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        placeholder="search by name"
        autoComplete="off"
      />
      {chars.map(ele => {
        return (
          <div key={ele.id}>
            <MainCard>
              <CharacterCard
                id={ele.id}
                name={ele.name}
                status={ele.status}
                species={ele.species}
              />
            </MainCard>
          </div>
        );
      })}
    </section>
  );
}
