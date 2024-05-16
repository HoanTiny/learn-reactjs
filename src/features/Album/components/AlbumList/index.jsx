import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./styles.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

function AlbumList({ albumList }) {
  return (
    <div>
      <h3>AlbumList</h3>
      <ul className="albumlist">
        {albumList.map((album) => (
          <li key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
