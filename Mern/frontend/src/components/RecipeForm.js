import { useState } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import HomeCss from '../components/css/home.module.css'

const RecipeForm = () => {
  const { dispatch } = useRecipesContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const recipe = { title, ingredients, directions };

    const response = await fetch("https://pantry-pal-backend.onrender.com/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setIngredients([]);
      setDirections("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_RECIPE", payload: json });
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  return (
    <form className={HomeCss['secondForm']} onSubmit={handleSubmit}>
      <h3>Add a New Recipe</h3>

      <label>Recipe Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Ingredients:</label>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="ingredient"
            value={ingredient.name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
            className={emptyFields.includes("ingredients") ? "error" : ""}
          />
          <input
            type="number"
            placeholder="amount"
            value={ingredient.amount}
            onChange={(e) =>
              handleIngredientChange(index, "amount", e.target.value)
            }
            className={emptyFields.includes("ingredients") ? "error" : ""}
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)}>
            Remove
          </button>
        </div>
      ))}
      <button  className={HomeCss['addRecipeBTN']} type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>

      <label>Directions:</label>
      <textarea
        onChange={(e) => setDirections(e.target.value)}
        value={directions}
        className={emptyFields.includes("directions") ? "error" : ""}
      />

      <button className={HomeCss['addRecipeBTN']}>Add Recipe</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default RecipeForm;
