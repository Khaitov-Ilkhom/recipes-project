import React, {useEffect, useState} from 'react'
import Header from "../../components/header/Header.tsx";
import Container from "../../components/container/Container.tsx";
import {Params, useParams} from "react-router-dom";
import {Recipe} from "../../types";

const Details: React.FC = () => {
  const {id}: number = useParams<Params<number>>()
  const [recipe, setRecipe] = useState<Recipe>(
      {
        id: 0,
        name: "",
        ingredients: [],
        instructions: [],
        prepTimeMinutes: 0,
        cookTimeMinutes: 0,
        servings: 0,
        difficulty: "",
        cuisine: "",
        caloriesPerServing: 0,
        tags: [],
        userId: 0,
        image: "",
        rating: 0,
        reviewCount: 0,
        mealType: []
      }
  );

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res: Response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error: any) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, [id]);


  return (
      <div className="w-full min-h-screen bg-gray-500">
        <Header/>
        <Container>
          {
              recipe && <div className="text-gray-400 font-sans py-[50px]">
                <h1 className="text-gray-300 text-3xl font-bold mb-4">{recipe.name}</h1>
                <div className="w-full flex justify-center items-start gap-8">
                  <div>
                    <img src={recipe.image} alt={recipe.name}
                         className="max-w-[600px] h-auto rounded mb-4"/>
                  </div>
                  <div className="flex justify-center items-start">
                    <div>
                      <div className="mb-4">
                        <h2 className="text-gray-300 text-2xl font-semibold">Information:</h2>
                        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes}</p>
                        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes}</p>
                        <p><strong>Servings:</strong> {recipe.servings}</p>
                        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                        <p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
                        <p><strong>Rating:</strong> {recipe.rating}/5 ({recipe.reviewCount} reviews)</p>
                        <p><strong>Meal Type:</strong> {recipe.mealType[0]}</p>
                      </div>

                      <div className="mb-4">
                        <h2 className="text-gray-300 text-2xl font-semibold">Tags:</h2>
                        <ul className="list-disc ml-6">
                          {
                            recipe.tags.map(tag =>
                                <li key={tag}>{tag}</li>
                            )
                          }
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h2 className="text-gray-300 text-2xl font-semibold">Ingredients:</h2>
                        <ul className="list-disc ml-6">
                          {
                            recipe.ingredients.map(ingre =>
                                <li key={ingre}>{ingre}</li>
                            )
                          }
                        </ul>
                      </div>
                      <div className="mb-4 max-w-[300px]">
                        <h2 className="text-gray-300 text-2xl font-semibold">Instructions:</h2>
                        <ol className="list-decimal ml-6">
                          {
                            recipe.instructions.map(instruc =>
                                <li key={instruc}>{instruc}</li>
                            )
                          }
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </Container>
      </div>
  )
}
export default Details
