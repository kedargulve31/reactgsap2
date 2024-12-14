import gsap from "gsap";
import { useState } from 'react';

export default function Animate() {
  const [xAxis, setXaxis] = useState(0);
  const [yAxis, setYaxis] = useState(0);

  const randomX = () => gsap.utils.random(-500, 500, 15);
  const randomY = () => gsap.utils.random(-300, 300, 25);
  const randomRotate = () => gsap.utils.random(-360, 360, 30);

  const onButtonClick = () => {
    const newX = randomX();
    const newY = randomY();
    const newRotate = randomRotate();

    setXaxis(newX);
    setYaxis(newY);

    // Animate to new random values
    gsap.to('.parent .panel1 img', {
      x: newX,
      y: newY,
      rotate: newRotate,
      duration: 1,
      ease: "power3.inOut",
      
    });
  };

  return (
    <>
      <div className="parent">
        <div className="panel1">
          <img src="https://thumbs.dreamstime.com/b/house-lizard-gekco-isolated-white-background-31213734.jpg" alt="" />
        </div>
        <button onClick={onButtonClick}>Click Me..</button>
      </div>
    </>
  );
}
