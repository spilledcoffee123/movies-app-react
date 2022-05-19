import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

// The function directly below compares voting_average to determine color of number rating
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else {
    return "red";
  }
};

// This function below grabs the data from the img_api and displays it
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img
      src={
        poster_path
          ? IMG_API + poster_path
          : // If there is no poster image to display
            "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
      alt={title}
    />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-hover">
      <h2>Synopsis:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
