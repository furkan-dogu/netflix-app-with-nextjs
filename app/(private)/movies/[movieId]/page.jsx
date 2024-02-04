import { getMovieDetail, getVideoKey } from "@/helpers/movieFunctions";
import VideoSection from "../components/VideoSection";
import { BackspaceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MovieDetail = async ({ params: { movieId } }) => {
  const movieDetails = await getMovieDetail(movieId);
  const videoKey = await getVideoKey(movieId);

  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-white text-center text-3xl">{movieDetails?.title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          href={"/movies"}
          className="bg-white mt-2 flex flex-row rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg font-semibold items-center hover:bg-neutral-300 transition"
        >
          <BackspaceIcon className="w-4 text-black md:w-7 mr-1" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
