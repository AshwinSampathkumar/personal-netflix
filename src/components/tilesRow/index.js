import React from "react";
import PropTypes from "prop-types";
import { imageBaseUrl } from "../../axios";
import "../../styles/components/tilesrow.scss";

function TilesRow({ title, movies, topRow }) {
  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>

      <div className="tiles-row-container">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`image-tile ${topRow && "image-tile-top-row"}`}
              src={`${imageBaseUrl}${
                topRow ? movie.poster_path : movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

TilesRow.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  topRow: PropTypes.bool
};

TilesRow.defaultProps = {
  title: "",
  movies: [],
  topRow: false
};

export default TilesRow;
