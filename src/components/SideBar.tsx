import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Content } from "./Content";
import { GenreIdProps, GenreResponseProps } from "./Interfaces";

export function SideBar() {
  // Complete aqui
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
      <Content selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} />
    </>
  )
}