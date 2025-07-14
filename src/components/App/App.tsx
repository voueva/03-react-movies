import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader'
import MovieGrid from '../MovieGrid/MovieGrid'
import MovieModal from '../MovieModal/MovieModal'
import SearchBar from '../SearchBar/SearchBar'
import './App.module.css'

function App() {

  return (
    <>
      <SearchBar></SearchBar>
      <MovieGrid></MovieGrid>
      <Loader></Loader>
      <ErrorMessage></ErrorMessage>
      <MovieModal></MovieModal>
    </>
  )
}

export default App
