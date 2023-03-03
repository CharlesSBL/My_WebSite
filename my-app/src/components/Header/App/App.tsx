import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#fff",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

function App2() {
  const [val, setVal] = React.useState(1);

  React.useEffect(() => {
    const casa = setTimeout(() => {
      setVal(val + 0.2);
    }, 0);

    clearTimeout(casa);
  }, [val]);

  return (
    <ParticleImage
      style={{
        zIndex: -1,
        position: "fixed",
        top: "0px",
        left: "150px",
        transform: `rotate(${val}deg)`,
      }}
      src={"/react-logo.png"}
      width={1200}
      height={800}
      scale={1}
      entropy={40}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="none"
    />
  );
}
const App = React.memo(App2);

export default App;
