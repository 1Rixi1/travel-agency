import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { galleryImages } from "./gallery-images.js";

export const GalleryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((gallery, idx) => (
          <img
            className='gallery__img'
            src={gallery}
            key={idx}
            alt={"imgGallery"}
            style={{ display: "block", width: "100%", borderRadius: "10%" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
