/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import TilesRow from "../../../components/tilesRow";
import { useGetPopularListQuery } from "../../../redux/services/movies";
import { HOME } from "../../../constants";

function PopularList() {
  const { popularNow } = HOME;
  const { data: popularList } = useGetPopularListQuery();

  return <TilesRow title={popularNow} movies={popularList?.results} />;
}

export default PopularList;
