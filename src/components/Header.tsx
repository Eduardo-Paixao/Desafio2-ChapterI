import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { GenreIdProps, GenreResponseProps } from "./Interfaces";

// import { Container } from './styles';

const Header = ({ selectedGenreId }: GenreIdProps) => {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, []);
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};

export default Header;
