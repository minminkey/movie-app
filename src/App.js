// import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodIlike = [
  {
    id : 1,
    name : "kimchi",
    rating : 5,
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OuwvJ-G_71I5bnUiylnN6AHaEK%26pid%3DApi&f=1"
  },
  {
    id : 2,
    name : "kimbap",
    rating : 4.9,
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OuwvJ-G_71I5bnUiylnN6AHaEK%26pid%3DApi&f=1"
  },
  {
    id : 3,
    name : "sam",
    rating : 4.8,
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OuwvJ-G_71I5bnUiylnN6AHaEK%26pid%3DApi&f=1"
  },
  {
    id : 4,
    name : "bol",
    rating : 4.7,
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OuwvJ-G_71I5bnUiylnN6AHaEK%26pid%3DApi&f=1"
  }
]

function App() {
  return (
  <div> 
     {foodIlike.map(dish =>(
        <Food 
        key={dish.id}
        name={dish.name}
        picture = {dish.image}
        rating = {dish.rating}
        />
     ))}
  </div>
  );
}

export default App;
