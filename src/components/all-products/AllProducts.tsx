import { useEffect, useState } from "react";
import { Recipe } from "../../types";
import Container from "../container/Container";
import Card from "../card/Card";


const AllProducts = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      try { 
        const res: Response = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error: any) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className="py-6">
      <Container>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllProducts
