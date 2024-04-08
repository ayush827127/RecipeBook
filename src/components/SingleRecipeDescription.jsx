import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleRecipeDescriptionItem from "./SingleRecipeDescriptionItem"
import Loading from "./Loading";

const SingleRecipeDescription = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipesById = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&query=indian&number=50
        `;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRecipesById();
  }, []);

  return  (<>
  <div>
      { loading ? <Loading/> : <SingleRecipeDescriptionItem  recipe={recipe} /> }
  </div>
  </>);

};

export default SingleRecipeDescription;
