import React, { useState } from "react";
import "./css/index.css";

const Educationsilde = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [scroll, setScroll] = useState<number>(0);
  const handlePreviewClick = (index: any) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="education-silde">
      <div className="silde-view">
        <img
          src={images[currentImageIndex]}
          srcSet={imgSrc[currentImageIndex]}
          alt=""
        />
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

const images = [
  "/assets/education/pc/01.png",
  "/assets/education/pc/02.png",
  "/assets/education/pc/03.png",
  "/assets/education/pc/04.png",
  "/assets/education/pc/05.png",
  "/assets/education/pc/06.png",
  "/assets/education/pc/07.png",
  "/assets/education/pc/08.png",
  "/assets/education/pc/09.png",
  "/assets/education/pc/10.png",
  "/assets/education/pc/11.png",
  "/assets/education/pc/12.png",
  "/assets/education/pc/13.png",
  "/assets/education/pc/14.png",
  "/assets/education/pc/15.png",
  "/assets/education/pc/16.png",
];

const imgSrc = [
  "/assets/education/pc/01@2x.png 2x, /assets/education/pc/01@3x.png 3x",
  "/assets/education/pc/02@2x.png 2x, /assets/education/pc/02@3x.png 3x",
  "/assets/education/pc/03@2x.png 2x, /assets/education/pc/03@3x.png 3x",
  "/assets/education/pc/04@2x.png 2x, /assets/education/pc/04@3x.png 3x",
  "/assets/education/pc/05@2x.png 2x, /assets/education/pc/05@3x.png 3x",
  "/assets/education/pc/06@2x.png 2x, /assets/education/pc/06@3x.png 3x",
  "/assets/education/pc/07@2x.png 2x, /assets/education/pc/07@3x.png 3x",
  "/assets/education/pc/08@2x.png 2x, /assets/education/pc/08@3x.png 3x",
  "/assets/education/pc/09@2x.png 2x, /assets/education/pc/09@3x.png 3x",
  "/assets/education/pc/10@2x.png 2x, /assets/education/pc/10@3x.png 3x",
  "/assets/education/pc/11@2x.png 2x, /assets/education/pc/11@3x.png 3x",
  "/assets/education/pc/12@2x.png 2x, /assets/education/pc/12@3x.png 3x",
  "/assets/education/pc/13@2x.png 2x, /assets/education/pc/13@3x.png 3x",
  "/assets/education/pc/14@2x.png 2x, /assets/education/pc/14@3x.png 3x",
  "/assets/education/pc/15@2x.png 2x, /assets/education/pc/15@3x.png 3x",
  "/assets/education/pc/16@2x.png 2x, /assets/education/pc/16@3x.png 3x",
];
