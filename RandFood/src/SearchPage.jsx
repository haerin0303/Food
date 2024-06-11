import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const API_KEY = 'd72030ddc32144268edb24352547be54';
  const searchRecipes = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <form onSubmit={searchRecipes}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="음식을 입력해주세요"
        />
        <button type="submit">Search</button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
