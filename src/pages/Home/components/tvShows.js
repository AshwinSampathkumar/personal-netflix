/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import TilesRow from "../../../components/tilesRow";
import { useGetShowsListQuery } from "../../../redux/services/movies";
import { HOME } from "../../../constants";

function TvShowsList() {
  const { tvShows: tvShowsTitle } = HOME;
  const { data: tvShows } = useGetShowsListQuery();

  return <TilesRow title={tvShowsTitle} movies={tvShows?.results} />;
}

export default TvShowsList;
