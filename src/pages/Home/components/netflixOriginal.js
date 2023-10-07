/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import TilesRow from "../../../components/tilesRow";
import { HOME } from "../../../constants";

function NetflixOriginal({ trending }) {
  const { netflixOriginal } = HOME;
  return <TilesRow title={netflixOriginal} movies={trending?.results} topRow />;
}

NetflixOriginal.propTypes = {
  trending: PropTypes.any.isRequired
};

NetflixOriginal.defaultProps = {
  trending: []
};

export default NetflixOriginal;
