import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <img src={album.thumbnailUrl} alt={album.name} />
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
