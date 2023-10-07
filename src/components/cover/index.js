import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/cover.scss";
import { imageBaseUrl } from "../../axios";
import { COMPONENTS } from "../../constants";

const Cover = ({ movie }) => {
  const { cover } = COMPONENTS;

  return (
    <div style={{ zIndex: 1, position: "relative" }}>
      <div
        className="cover-main"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${imageBaseUrl}/${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
        }}
      >
        <div className="cover-contents">
          <h1 className="movie-title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <h3 className="movie-overview">
            {movie?.overview?.length > 200
              ? movie?.overview?.substring(0, 200) + "..."
              : movie?.overview}
          </h3>
          <div style={{ paddingTop: 8 }}>
            <button className="btn-play">{cover.play}</button>
            <button className="btn-more">{cover.moreInfo}</button>
          </div>
        </div>
      </div>
      <div className="faded-bottom" />
    </div>
  );
};

Cover.propTypes = {
  movie: PropTypes.object
};

Cover.defaultProps = {
  movie: {}
};

export default Cover;
