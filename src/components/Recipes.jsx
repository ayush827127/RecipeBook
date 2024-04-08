import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = ({recipes}) => {

  return (
    <div>
      <div className="container" id="project">
        <hr className="my-3 border-cyan-500 bg-cyan-500" />
        <div className="row">
            {
              recipes.map((recipe)=>(
             <RecipeItem recipe={recipe} key={recipe.id} />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Recipes;
