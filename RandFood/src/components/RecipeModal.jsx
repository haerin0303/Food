import React from 'react';
import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
      </div>
    </div>
  );
};

export default RecipeModal;
