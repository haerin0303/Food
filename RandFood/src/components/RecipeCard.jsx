// src/components/RecipeCard.jsx
import React, { useState } from 'react';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  const handleTmiClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={handleTmiClick}>TMI</button>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
      {showModal && <RecipeModal recipe={recipe} onClose={handleCloseModal} />}
    </div>
  );
};

export default RecipeCard;
