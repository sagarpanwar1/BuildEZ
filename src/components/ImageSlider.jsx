"use client";

import { useEffect, useState } from "react";

const img1 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
const img2 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
const img3 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
const img4 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
const img5 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
const img6 = ("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

const images = [img1, img2, img3, img4, img5, img6];
const speed = 3500;
let timerId;
const ImageSlider = () => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      if (pos >= images.length - 1) setPos(0);
      else setPos((pos) => (pos += 1));
    }, [speed]);

    return () => clearInterval(timerId);
  }, [pos]);

  return (
    <div className="image-slider">
      <img src={images[pos]} />
    </div>
  );
};

export default ImageSlider;
