/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TilesRow from "../../../components/tilesRow";
import { useGetMovieListMutation } from "../../../redux/services/movies";

function MoviesList({ title, genreId }) {
  const [getMovies, { data: moviesList }] = useGetMovieListMutation();

  useEffect(() => {
    if (genreId) {
      getMovies({
        with_genres: genreId
      });
    }
  }, [genreId]);

  return <TilesRow title={title} movies={moviesList?.results} />;
}

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  genreId: PropTypes.string.isRequired
};

MoviesList.defaultProps = {
  title: "",
  genreId: ""
};

export default MoviesList;
