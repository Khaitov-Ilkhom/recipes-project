import { useState } from "react";
import { Recipe } from "../../types"
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiCookingPot, GiFireBowl } from "react-icons/gi"


const Card = ({recipe} : {recipe: Recipe} ) => {


  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
      <div
          className="rounded-lg flex flex-col justify-between overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
        <div className="relative">
          <div className="absolute top-0 left-0 bg-gray-600 text-white px-2 py-1 rounded-br-lg">
            {recipe.difficulty}
          </div>
          <img className="w-full h-56 object-cover" src={recipe.image} alt={recipe.name}/>
          <div className="absolute top-0 right-0 p-2">
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="text-gray-400 transition-colors duration-300"
            >
              {isFavorite ? (
                  <AiFillHeart size={24} className="text-red-500"/>
              ) : (
                  <AiOutlineHeart size={24} className="text-red-500"/>
              )}
            </button>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{recipe.name}</div>

          <div className="flex items-center mb-4">
            <AiFillStar className="h-5 w-5 text-yellow-400"/>
            <span className="ml-1 text-gray-300 font-semibold">{recipe.rating.toFixed(1)}</span>
            <span className="ml-1 text-gray-500">({recipe.reviewCount} reviews)</span>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-gray-400 text-sm font-semibold">
              {recipe.cuisine} Cuisine
            </p>
            <div className="flex items-center">
              <FaUser className="h-5 w-5 text-gray-400 mr-1"/>
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-2 text-gray-400">
            <div className="flex items-center">
              <BiTime className="h-5 w-5 text-gray-400 mr-1"/>
              <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
            </div>
            <div className="flex items-center">
              <GiFireBowl className="h-5 w-5 text-gray-400 mr-1"/>
              <span>{recipe.caloriesPerServing} cal</span>
            </div>
          </div>

          <div className="flex-1 mt-4">
            <h4 className="font-semibold text-gray-300 mb-2">Main Ingredients:</h4>
            <ul className="list-disc list-inside text-gray-400">
              {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                  <li key={index} className="text-sm">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 pb-4">
          <button
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
          >
            <GiCookingPot className="mr-2"/>
            View Recipe Details
          </button>
        </div>
      </div>
  )
}

export default Card