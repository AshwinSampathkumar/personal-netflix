import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/profiletile.scss";

function ProfileTile({ title, asset, onPressTile }) {
  return (
    <div className="profile-main">
      <img onClick={() => onPressTile({ title, asset })} className="profile-tile" src={asset} />
      <div className="display-name">{title}</div>
    </div>
  );
}

ProfileTile.propTypes = {
  title: PropTypes.any.isRequired,
  asset: PropTypes.any.isRequired,
  onPressTile: PropTypes.func.isRequired
};

ProfileTile.defaultProps = {
  title: "",
  asset: ""
};

export default ProfileTile;
