import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/3/5/8135e8b3c0a0c5e3b0b8f5a4b7b5e2c4.jpg",
    },
    {
      id: 2,
      name: "Nhạc trữ tình",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/3/5/8135e8b3c0a0c5e3b0b8f5a4b7b5e2c4.jpg",
    },
    {
      id: 3,
      name: "Nhạc rap",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/1/3/5/8135e8b3c0a0c5e3b0b8f5a4b7b5e2c4.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
