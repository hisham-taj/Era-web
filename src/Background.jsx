// Background.jsx
import { useScroll } from "./ScrollContext";

const Background = () => {
  const { scrollPosition } = useScroll();
  const calculatedLeft = Math.max(0, 55 - scrollPosition / 50); // Adjust speed

  return (
    <div
      className="w-[35%] h-[70%] bg-yellow-300 rounded-full absolute top-[18%] blur-3xl"
      style={{ left: `${calculatedLeft}%` }}
    ></div>
  );
};

export default Background;
