import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RecipeHome from "../components/RecipeHome";
import SingleRecipeDescription from "../components/SingleRecipeDescription";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <RecipeHome />
            },
            {
                path: "/recipe/:id",  
                element: <SingleRecipeDescription/>
            }
        ]
    }

])

export default router;