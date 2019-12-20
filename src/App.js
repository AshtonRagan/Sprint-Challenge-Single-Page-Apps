import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationCard from "./components/LocationCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/character/:id">
        <LocationCard />
      </Route>
    </main>
  );
}
