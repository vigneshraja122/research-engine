
import LandingInput from "./components/landinginput";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f0e9e1] min-h-screen space-y-8">
      <div className="w-full h-20 flex justify-center items-center">
        <span className="font-bold text-lg">Ask Junior</span>
      </div>
      <div className="w-full md:w-[70%] h-[50%] flex flex-col justify-center items-center space-y-8">
        <span className="font-serif text-5xl md:text-6xl">
          Welcome, vignesh
        </span>
        <LandingInput />
      </div>
    </div>
  );
}
