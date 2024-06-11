// src/RandomPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const RandomPage = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const API_KEY = 'd72030ddc32144268edb24352547be54'; // Spoonacular API 키

  const getRandomRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`
      );
      setRandomRecipe(response.data.recipes[0]);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };

  return (
    <div className='Rand'>
      <h2>Random Recipe</h2>
        <button onClick={getRandomRecipe}>Get Random Recipe</button>
      {randomRecipe && <RecipeCard recipe={randomRecipe} />}
    </div>
  );
};

export default RandomPage;
