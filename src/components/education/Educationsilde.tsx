import React, { useEffect, useRef, useState } from "react";
import "./css/index.css";

const images = [
  "/assets/education/pc/01.png",
  "/assets/education/pc/02.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/04.png",
  "/assets/education/pc/05.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/03.png",
];

const Educationsilde = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [now, setNow] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(0);
  const handlePreviewClick = (index: any) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="education-silde">
      <div className="silde-view">
        <img src={images[currentImageIndex]} alt="" />
      </div>
      <div className="computer">
        <img src="/assets/education/pc/computer.png" />
      </div>
      <div
        className="preview-container"
        onScroll={(e) => {
          const width = e.currentTarget.scrollWidth;
          const left = e.currentTarget.scrollLeft;
          setScroll((80 * left) / (width - e.currentTarget.clientWidth));
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`preview-image ${
              currentImageIndex === index ? "active" : ""
            }`}
            onClick={() => handlePreviewClick(index)}
          >
            <img src={image} alt={`Preview ${index}`} />
          </div>
        ))}
      </div>

      <div className="scrollbar">
        <div
          className="activebar"
          style={{
            marginLeft: `${scroll < 80 ? scroll : 80}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Educationsilde;
