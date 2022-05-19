import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import moviesLogo from "./moviesLogo.png";

// Main featured home page api
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6959ff03efe9bc32ef44ee09fe34588b&page=1";

// Search functionality api
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=6959ff03efe9bc32ef44ee09fe34588b&query=";

function App() {
  // By default movies and searchTearm are set to empty array and string
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // This sets FEATURED_API from an empty array to the data.results of FEATURED_API
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // Code directly fetches the API called and sets setMovies to data.results
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //  Handles refresh on logo click to go back to home page/featured api page list
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <header>
        <img
          src={moviesLogo}
          className="movies-logo"
          alt="logo"
          onClick={refreshPage}
        />
        <span className="main-title">Movies-App</span>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search-bar"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
