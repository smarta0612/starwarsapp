import React from "react";
import FilmItem from "./FilmItem";
import { useEffect, useState } from "react";
import { getFilms } from "../lib/API";

function FilmList() {
  const [filmData, setFilmData] = useState([]);
  const [savedFilmIds, setSavedFilmIds] = useState([]);

  const toggleFavorite = (episode_id, isFavorite) => {
    updateSavedItems(episode_id, isFavorite);
    const newFilmData = filmData.map((film) => {
      if (episode_id === film.episode_id) {
        film.isFavorite = !isFavorite;
      }

      return film;
    });

    setFilmData(newFilmData);
  };

  const updateSavedItems = (episode_id, isFavorite) => {
    let savedList = window.localStorage.getItem("savedList");
    savedList = JSON.parse(savedList) || [];
    if (!isFavorite) {
      savedList.push(episode_id);
    } else {
        savedList = savedList.filter( item => item!==episode_id)
    }

    window.localStorage.setItem("savedList", JSON.stringify(savedList));
  };

  useEffect(() => {
    let savedList = window.localStorage.getItem("savedList");
    savedList = JSON.parse(savedList) || [];
    getFilms().then((response) => {
      const filmDetails = response.data.results;
      filmDetails.forEach((film) => {
        film.isFavorite = savedList.includes(film.episode_id);
        return film;
      });
      setFilmData(filmDetails);
      console.log("i am the response", response.data.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {filmData.length &&
          filmData.map((film) => {
            return <FilmItem key={film.episode_id} film={film} toggleFavorite={toggleFavorite} />;
          })}
      </ul>
    </div>
  );
}

export default FilmList;
