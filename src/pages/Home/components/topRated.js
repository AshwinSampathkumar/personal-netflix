/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import TilesRow from "../../../components/tilesRow";
import { useGetTopRatedListQuery } from "../../../redux/services/movies";
import { HOME } from "../../../constants";

function TopRated() {
  const { topRated: topRatedTitle } = HOME;
  const { data: topRated } = useGetTopRatedListQuery();

  return <TilesRow title={topRatedTitle} movies={topRated?.results} />;
}

export default TopRated;
