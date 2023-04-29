import Image from "next/image";
import a1 from "../public/a1.png";
import a2 from "../public/a2.png";
import a3 from "../public/a3.png";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
      <div className="m-10 p-10 sm:h-full h-screen">
        <h1 className="font-inter text-5xl font-bold">Instituto Leyer's</h1>
      </div>
      <div className="grid md:grid-rows-2 grid-cols-1 bg-red-100">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={a1}
              alt="photo"
              className="w-full h-full object-cover filter gray-scale-100"
            />
          </div>
          <div className="bg-blue-100">
            <Image
              src={a2}
              alt="photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <Image src={a3} alt="photo" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
