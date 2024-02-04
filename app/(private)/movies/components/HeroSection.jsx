import React from "react";
import VideoSection from "./VideoSection";
import { getVideoKey } from "@/helpers/movieFunctions";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

const HeroSection = async ({ movieId, title, overview }) => {
  const videoKey = await getVideoKey(movieId);

  return (
    <div className="relative h-[50vw]">
      <VideoSection videoKey={videoKey} />
      <div className="absolute top-[30%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
          {title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-4/5 lg:w-1/2 drop-shadow-xl">
          {overview}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <Link
            href={`/movies/${movieId}`}
            className="bg-white rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center flex-row hover:bg-neutral-300 transition"
          >
            <PlayIcon className="w-4 md:w-7 text-black mr-1" />
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
