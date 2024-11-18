import { FaLocationArrow, FaDownload } from "react-icons/fa"; // Import necessary icons
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div className="absolute top-5 left-5 z-20">
        <Image
          src="/jsm-logo.png"
          alt="Jihed Medini"
          width={100}
          height={100}
          className="rounded-full shadow-lg"
        />
        {/* Updated button styles to match site design */}
        <div className="mt-3">
          <a
            href="/Jihed_s_Resume.pdf"
            download="Jihed_Medini_Resume.pdf"
            className="flex items-center bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 shadow"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <FaDownload className="mr-2" /> {/* Icon with a margin-right */}
            Resume
          </a>
        </div>
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            &#x2764; Keep it Simple &#x2764;
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I’m Jihed, a Full-Stack Web Developer based in Tunisia.
          </p>
          {/* <Link href="#about" passHref>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
