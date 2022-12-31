
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

function GalleryImage({ index, images, image }) {
  const [photoIndex, setPhotoIndex] = useState(index);
  const [open, setOpen] = useState(false);

  console.log(image);
  return (

    <div className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] px-2 py-2">

    <div className="graphics-photo">

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <img
        src={image}
        alt="sample work"
        onClick={() => setOpen(true)}
        className="shadow-md"
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
      />

    </div>
    </div>
  );
}

export default GalleryImage;
