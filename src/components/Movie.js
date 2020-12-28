import React from "react"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
      <Link
        to={{
          pathname: "/movie-detail",
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <div className="movie">
          <img src={poster} alt={title} title={title}></img>
          <div className="movie__date">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genres, index) => (
                <li key={index} className="genres_genre">
                  {genres}
                </li>
              ))}
            </ul>
            <p className="movie_summary">{summary.slice(0, 140)}...</p>
          </div>
        </div>
      </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default Movie;