import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_KEY = 'd72030ddc32144268edb24352547be54';

  const searchRecipes = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true`
      );
      setRecipes(response.data.results);
      setCurrentIndex(0); // Reset to first recipe on new search
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const prevPrevRecipe = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const prevRecipe = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextRecipe = () => {
    if (currentIndex < recipes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextNextRecipe = () => {
    if (currentIndex < recipes.length - 2) {
      setCurrentIndex(currentIndex + 2);
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
          className={query ? 'inputWithValue' : ''}
        />
        <button type="submit" className='Search'>Search</button>
      </form>
      {recipes.length > 0 && (
        <div>
          <div className="recipe-display">
            <RecipeCard
              recipe={recipes[currentIndex]}
              showArrows={true}
              prevRecipe={prevRecipe}
              nextRecipe={nextRecipe}
            />
          </div>
          <div className="navigation-buttons">
            <button className="prev-prev" onClick={prevPrevRecipe}></button>
            <button className="prev" onClick={prevRecipe}></button>
            <button className="current"></button>
            <button className="next" onClick={nextRecipe}></button>
            <button className="next-next" onClick={nextNextRecipe}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
