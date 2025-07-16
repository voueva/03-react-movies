
import toast, { Toaster } from 'react-hot-toast'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader'
import MovieGrid from '../MovieGrid/MovieGrid'
import MovieModal from '../MovieModal/MovieModal'
import SearchBar from '../SearchBar/SearchBar'
import './App.module.css'
import type { Movie } from '../../types/movie'
import { useState } from 'react'
import { fetchMovies } from '../../services/movieService'

export default function App() {
  const [movieList, setMovieList] = useState<Array<Movie> | null>([]);
  const [selectMovie, setSelectMovie] = useState<Movie | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    setShowError(false);
    setMovieList(null);

    try {
      const newMovieList = await fetchMovies(query);
      if (newMovieList) {
        setMovieList(newMovieList);
      }

      if (!newMovieList || newMovieList.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch {
      setShowError(true);
      setMovieList([]);
    }
  };

  const handleSelect = (movie: Movie) => {
    setSelectMovie(movie);
  };

  const handleClose = () => {
    setSelectMovie(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {movieList && <MovieGrid onSelect={handleSelect} movies={movieList}></MovieGrid>}
      {!movieList && <Loader></Loader>}
      {showError && <ErrorMessage></ErrorMessage>}
      {selectMovie && <MovieModal onClose={handleClose} movie={selectMovie}></MovieModal>}
      <Toaster />
    </>
  );
}
