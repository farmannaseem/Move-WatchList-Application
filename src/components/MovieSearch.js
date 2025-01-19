import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieAdded } from '../Features/Movies/movieSlice';
import './MovieSearch.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();

  const searchMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=92f94d74`);
    const data = await response.json();
    if (data.Search) {
      setResults(data.Search);
    } else {
      setResults([]);
    }
  };

  const addMovie = (movie) => {
    const newMovie = {
      id: movie.imdbID,
      title: movie.Title,
      description: movie.Plot,
      releaseYear: movie.Year,
      genre: movie.Genre,
    };
    dispatch(movieAdded(newMovie));
  };

  return (
    <div className="movie-search-container">
      <h2 className="movie-search-title">Search for Your Favorite Movies</h2>
      <div className="movie-search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          className="movie-search-input"
        />
        <button onClick={searchMovies} className="movie-search-button">Search</button>
      </div>
      <div className="movie-search-results">
        {results.map((movie) => (
          <div key={movie.imdbID} className="movie-search-result-item">
            <div className="movie-info">
              <span className="movie-title">{movie.Title} ({movie.Year})</span>
            </div>
            <button onClick={() => addMovie(movie)} className="add-movie-button">Add to Watchlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
