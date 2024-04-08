import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import Loading from "./Loading";

const RecipeHome = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=indian&number=50
        `;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRecipes();
  }, []);

  return <div>
    {loading ? <Loading/> : <Recipes recipes={recipes} />}
  </div>
};

export default RecipeHome;
