import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
    const {movieList, page, setPage, watchList, addMovie, removeMovie} = props;

    const movieDisplay = movieList.map((movie, index) => {
        // return <h2>{movie.original_title}</h2>
        return <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} key={index} watchList={watchList}/>
    })

    const decrement = () => {
        setPage(page--)
    }

    const increment = () => {
        setPage(page++)
    }

  return ( 
  <div className="page">
    <h1>Jeff's Movie Theater</h1>
    <h3>Add a movie to your watchlist!</h3>
    <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
    </div>
    <div className="movie-container">{movieDisplay}</div>
  </div>
  )
};

export default MovieScreen;
