import React from "react";
import i18next from "i18next";

import Gallery from "react-image-show";
import "./GalleryOfWorksComponent.css";

const GalleryOfWorksComponent = props => {
  const { author } = props;
  const galleryOfWorks = author.work.map(item => {
    return process.env.PUBLIC_URL + item.img;
  });

  return (
    <div className="container" id="gallery">
      <h3 className="gallery-title">{i18next.t('Gallery')}</h3>
      <Gallery
        images={galleryOfWorks}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        indicators
        thumbnails
        fixedImagesHeight
        className="photo-gallery"
      />
    </div>
  );
};

export default GalleryOfWorksComponent;
