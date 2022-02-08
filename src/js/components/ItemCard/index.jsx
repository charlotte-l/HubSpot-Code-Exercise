import React from "react";
import PropTypes from "prop-types";

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function ItemCard({ data }) {
  const { title, year, poster, genre, type } = data;
  return (
    <div className="library-item">
      <div className="poster">
        <img src={poster} alt={`Poster for the ${year} ${type} ${title}`} />
      </div>
      <span className="library-title">{`${title} (${year})`}</span>
      <span className="library-subtitle">{`Genres: ${genre
        .map((genre) => capitalize(genre))
        .join(", ")}`}</span>
    </div>
  );
}

export default ItemCard;

ItemCard.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
  genre: PropTypes.array,
  type: PropTypes.string,
};
