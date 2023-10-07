import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "../../assets/svgs/netflix-icon.svg";
import routes from "../../utils/routes";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { NAVBAR } from "../../constants";
import "../../styles/layout/navbar.scss";

const Navbar = ({ selectedProfile }) => {
  const { options } = NAVBAR;
  const navigate = useNavigate();
  const screenSize = useWindowSize();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateToProfile = () => {
    navigate(routes.profile);
  };

  return (
    <div className={`container-navbar ${offset > 30 && `after-scroll`}`}>
      <div className="inner-container">
        <img className="netflix-logo" src={NetflixLogo} />
        {screenSize.width > 640
          ? options.map((element, index) => {
              return (
                <h5
                  key={index}
                  style={{ paddingLeft: 16, color: index == 0 ? "white" : "#B6B5B6" }}
                >
                  {element.title}
                </h5>
              );
            })
          : null}
      </div>
      <div className="inner-container">
        <h5 className="nav-profile-title">{selectedProfile?.title}</h5>
        <img
          className="nav-profile-image"
          onClick={navigateToProfile}
          width={40}
          src={selectedProfile?.asset}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  selectedProfile: PropTypes.any.isRequired
};

Navbar.defaultProps = {
  selectedProfile: {}
};

export default Navbar;
