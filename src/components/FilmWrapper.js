import React, { useState } from "react";
import FilmList from "./FilmList";

function FilmWrapper() {
  return (
    <div>
      <h1>Are you a big fan of Star Wars?</h1>
      <h2>Which one is your all time favourite?</h2>
      <FilmList />
    </div>
  );
}

export default FilmWrapper;
