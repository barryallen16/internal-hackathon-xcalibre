import Story from "./assets/components/Story";
import Abode from "./assets/images/adobe.png";
import amazon from "./assets/images/amazon.png";
import Spotify from "./assets/images/spotify-logo.png";
import Zapier from "./assets/images/zapier-logo-reversed.png";
import Slack from "./assets/images/slack.png";
import Zoom from "./assets/images/zoom1.png";
import metal from "./assets/images/SheetMetal002_2K-PNG_Displacement.png";

export default function App() {
  const imgasd = "./assets/images/adobe.png";
  return (
    <div className="bg-[#1c1c1c] ">
      <div className=" mx-20 items-center justify-center bg-graphBg bg-cover grid bg-center h-screen">
        <div className="flex justify-center flex-col items-center  h-screen ">
          <p className="text-white font-bold text-center text-5xl w-2/3 text-wrap">
            A Digital Product Studio that will Work
          </p>
          <div className="text-white justify-center items-center bg-slate-300 p-4 text-xl m-4 rounded backdrop-blur-lg bg-transparent border-neutral-800 border-solid border-2">
            <p>
              For <button className="p-2 bg-[#2a2a2a] rounded">Startups</button>{" "}
              ,{" "}
              <button className="p-2 bg-[#2a2a2a] rounded">
                Enterprise leaders{" "}
              </button>{" "}
              ,{" "}
              <button className="p-2 bg-[#2a2a2a] rounded">
                Media & Publishers
              </button>{" "}
              and{" "}
              <button className="p-2 bg-[#2a2a2a] rounded">Social Good</button>{" "}
            </p>
          </div>
          <div className="justify-center text-white ">
            <button className="bg-transparent p-5 border-2 m-2 rounded-xl font-bold backdrop-blur-xl border-neutral-800 ">
              Our Works
            </button>{" "}
            <button className="bg-[#78ee55] p-5 text-black m-2 rounded-xl font-bold">
              Contact Us
            </button>
          </div>
        </div>
        <div className="bg-[#1c1c1c]  justify-evenly  flex flex-row p-10 w-screen items-center ">
          {" "}
          <img src={Zapier} className="w-[100px] h-[40px]" />
          <img className="w-[120px] h-[40px]" src={Abode} />
          <img className="w-[120px] h-[40px]" src={Spotify} />
          <img className="w-[120px] h-[40px]" src={Slack} />
          <img className="w-[120px] h-[40px]" src={amazon} />
          <img className="w-[100px] h-[30px] mix-blend-screen" src={Zoom} />
        </div>
        <div className=" mx-16 flex items-center justify-center flex-col bg-tealBg bg-center  h-[450px] bg-opacity-50 bg-cover">
          <h1 className="font-bold text-5xl text-white ">Our Services</h1>
          <p className="text-2xl text-white mt-4 ">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>
    </div>
    // {/* <div className="grid grid-rows-1 grid-flow-row gap-4"> */}

    // {/* <Story/> */}
    // </div>
    //  </div>
  );
}

<div className="relative bg-neutral-900 h-screen justify-center items-center text-center">
  <h1 className="text-3xl font-bold  text-white">About us</h1>

  <h2 className="text-white font-semibold text-base">
    Welcome to SquareUp where collaboration,expertise, and client-centrcitiy
    intersect to shape the future of digital innovation
  </h2>
</div>;
