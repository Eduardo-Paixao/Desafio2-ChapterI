import { useEffect, useState } from "react";
import { api } from "../services/api";
import Header from "./Header";
import { GenreIdProps, MovieProps } from "./Interfaces";
import { MovieCard } from "./MovieCard";

export function Content({ selectedGenreId }: GenreIdProps) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header selectedGenreId={selectedGenreId} />
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}