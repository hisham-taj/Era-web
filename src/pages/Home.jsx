import { useScroll } from "../ScrollContext";
import "../index.css";

const Home = () => {
  const { scrollPosition } = useScroll();

  // Adjusted calculations for more pronounced motion
  const calculatedLeft = Math.max(0, 55 - scrollPosition / 20); // Faster horizontal movement
  const calculatedTop = Math.min(10 + scrollPosition / 15, 180); // Faster vertical movement with a higher cap

  return (
    <div className="w-full h-[200vh] bg-white relative overflow-hidden flex flex-col">
      <div
        className="w-[35%] h-[35%] rounded-full absolute  blur-3xl bg-gradient-to-b"
        style={{
          left: `${calculatedLeft}%`,
          top: `${calculatedTop}%`,
        }}
      ></div>

      <div className="w-full h-[50%]  flex flex-col">
        <div className="w-full h-[20%]  flex ">
          <div className="w-[70%] flex items-center">
            <h1 className="text-[70px] max-sm:text-[16px] lg:text-[50px] shadows-into-light-regular text-[#21618c]">
              ERA Boutique and designing studio
            </h1>
          </div>
          <div className="w-[30%]  flex items-center ">
            <button
              className="bg-none border border-black w-[6vw] h-[5vh] max-sm:w-[30vw] max-sm:text-[10px] flex items-center justify-center rounded-lg
                          hover:bg-black hover:text-white hover:border-transparent transition duration-300"
              onClick={() => {
                window.open(
                  "https://wa.me/919544121458?text=Hello!%20I%20would%20like%20to%20know%20more.",
                  "_blank"
                );
              }}
            >
              Contact
            </button>

            <button
              className="m-5 bg-none border border-black w-[6vw] h-[5vh] max-sm:w-[30vw] max-sm:text-[10px] flex items-center justify-center rounded-lg
                        hover:bg-black hover:text-white hover:border-transparent transition duration-300"
              onClick={() => {
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </button>
          </div>
        </div>
        <div className="flex w-full h-[80%] max-sm:h-[50%]">
          <div className="w-[30%] max-sm:w-[40%] max-sm:h-[80%] flex justify-end">
            <img src="/assets/879596bf3a11bfb48a3b4a6f1cb6de05.jpg" alt="" />
          </div>
          <div className="w-[70%] max-sm:w-[60%]  flex items-center justify-center">
            <h1 className="text-[60px] max-sm:text-[25px]  m-16 ysabeau z-10 text-[#212f3c]">
              Where Fashion Meets Art: A Boutique and Design Studio Experience
            </h1>
            <img className="absolute top-[20%]" src="/assets/img_circle-additional-dark-016_wide.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] flex max-sm:flex-col z-10">
        <div className="w-[50%] max-sm:w-full flex flex-col items-center justify-center">
          <h1 className="text-[50px] max-sm:text-[20px] lg:text-[50px] m-10 ysabeau text-[#212f3c]">
            Dive Into the World of Creativity and Fashion Your Very Own
            Custom-Made Costume
          </h1>
          <h3 className="cinzel text-[30px] max-sm:text-[20px]">
            <a
              href="https://wa.me/919544121458?text=Hello!%20I%20would%20like%20to%20see%20your%20works."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#21618c] hover:underline"
            >
              Contact us for more details
            </a>
          </h3>
        </div>
        <div className="w-[50%] h-[70%] flex items-center justify-center z-10">
          <img
            className="w-[40%] h-[90%] max-sm:w-full max-sm:h-[70%] "
            src="/assets/360_F_918196369_wVDe5Bb12Z37SQeWwq9aYK4jZOVMiT42.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
