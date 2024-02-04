import { getMovies } from "@/helpers/movieFunctions";
import { movieSectionItems } from "@/helpers/movieSectionItems";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const Movies = async () => {
  const movies = await getMovies("now_playing");

  return (
    <>
      <HeroSection
        movieId={movies[0]?.id}
        title={movies[0]?.title}
        overview={movies[0]?.overview}
      />
      <div className="px-4 md:px-12 mt-4">
        {movieSectionItems.map(({ id, title, type }) => (
          <MovieSection key={id} title={title} type={type} />
        ))}
      </div>
    </>
  );
};

export default Movies;
