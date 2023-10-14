import { useRecipesContext } from '../hooks/useRecipesContext';
import { useAuthContext } from '../hooks/useAuthContext';
import HomeCss from '../components/css/home.module.css'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useRecipesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch('https://pantry-pal-backend.onrender.com/api/recipes/' + recipe._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_RECIPE', payload: json });
    }
  };

  return (
    <div className={HomeCss['recipe-details']}>
      <h4>{recipe.title}</h4>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name}: {ingredient.amount}
          </li>
        ))}
      </ul>
      <p>{recipe.directions}</p>
      <p>{formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}</p>
      <span className={`material-symbols-outlined ${true ? HomeCss.addPointer : ''}`} onClick={handleClick}>delete</span>
    </div>
  );
};

export default RecipeDetails;
