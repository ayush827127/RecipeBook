import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/RecipeItem.module.css";

const RecipeItem = ({ recipe }) => {
  return (
        <Link to={`/recipe/${recipe.id}`} className="col-lg-4 col-md-6 my-3" data-aos="fade-up-right">
          <div className={`${styles.card} card`}>
            <img src={recipe.image} className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className={`${styles.cardTitle} card-title`}>
                {recipe.title}
              </h5>
          </div>
        </div>
    </Link>
  );
};

export default RecipeItem;
