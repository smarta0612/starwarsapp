import React from "react";

function FilmItem({ film, toggleFavorite }) {
  let favBtn;
  
    film.isFavorite
      ? (favBtn = (
          <span>
            <i
              className="fab fa-jedi-order"
              style={{ fontSize: "2.5rem", color: "red" }}
            ></i>
          </span>
        ))
      : (favBtn = (
          <span>
            <i className="fab fa-jedi-order" style={{ fontSize: "2.5rem" }}></i>
          </span>
        ));
  
  return (
    <li>
      <div className="title">{film.title}</div>
      <div>episode number:{film.episode_id}</div>
      <div>release date:{film.release_date}</div>

      <button onClick={() => toggleFavorite(film.episode_id, film.isFavorite)}>
        {favBtn}
      </button>
    </li>
  );
}

export default FilmItem;
