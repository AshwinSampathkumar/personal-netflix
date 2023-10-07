import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProfile } from "../../redux/slices/profile";
import { profiles } from "../../constants";
import ProfileTile from "../../components/profileTile";
import routes from "../../utils/routes";
import "../../styles/page/profiles.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPressTile = async (payload) => {
    dispatch(setSelectedProfile(payload));
    navigate(routes.home);
  };

  return (
    <div className="container-manage-profile">
      <div className="who-is-watching-container">
        <div className="profile-title">{"Who's watching?"}</div>
      </div>
      <div className="profile-container">
        {profiles.map((profile) => {
          return (
            <ProfileTile
              key={profile.id}
              title={profile.name}
              asset={profile.resource}
              onPressTile={onPressTile}
            />
          );
        })}
      </div>

      <div className="btn-manage-profile-container">
        <div className="btn-manage-profile">Manage Profiles</div>
      </div>
    </div>
  );
};

export default Profile;
