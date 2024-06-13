import React, { useState } from 'react';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe, showArrows, prevRecipe, nextRecipe }) => {
  const [showModal, setShowModal] = useState(false);

  const handleTmiClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="recipe-card">
      {showArrows && <div className='arrow-left' onClick={prevRecipe}></div>}
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <div>
        <button onClick={handleTmiClick}>TMI</button>
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className='View_Recipt'>View Recipe</a>
      </div>
      {showArrows && <div className='arrow-right' onClick={nextRecipe}></div>}
      {showModal && <RecipeModal recipe={recipe} onClose={handleCloseModal} />}
    </div>
  );
};

export default RecipeCard;
