import { useState, useEffect } from 'react';
import { useRecipesContext } from '../hooks/useRecipesContext';
import { useAuthContext } from '../hooks/useAuthContext';

// import '../components/css/addrecipe.css'
// components
import '../index.css'
import RecipeDetails from '../components/RecipeDetails';
import RecipeForm from '../components/RecipeForm';

const Home = () => {
  const { recipes, dispatch } = useRecipesContext();
  const { user } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 2; // Number of recipes to display per page

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_RECIPES', payload: json });
      }
    };

    if (user) {
      fetchRecipes()
    }
  }, [dispatch, user])

  useEffect(() => {
    // Filter recipes based on the search query
    const filtered = recipes
      ? recipes.filter((recipe) => {
          const title = recipe.title.toLowerCase();
          return title.includes(searchQuery.toLowerCase());
        })
      : [];

    setFilteredRecipes(filtered);
    setCurrentPage(1); // Reset the current page to the first page
  }, [recipes, searchQuery]);

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  return (
    <div className="home">
      <div className="search-bar">
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search recipes" />
      </div>
      <div className="recipes">
        {currentRecipes.map((recipe) => (
          <RecipeDetails key={recipe._id} recipe={recipe} />
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <RecipeForm />
    </div>
  );
};

export default Home;
