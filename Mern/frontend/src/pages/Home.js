




import { useState, useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// import '../components/css/addrecipe.css'
// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 2; // Number of workouts to display per page

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  useEffect(() => {
    // Filter workouts based on the search query
    const filtered = workouts
      ? workouts.filter((workout) => {
          const title = workout.title.toLowerCase();
          return title.includes(searchQuery.toLowerCase());
        })
      : [];

    setFilteredWorkouts(filtered);
    setCurrentPage(1); // Reset the current page to the first page
  }, [workouts, searchQuery]);

  // Pagination
  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredWorkouts.length / workoutsPerPage);

  return (
    <div className="home">
      <div className="search-bar">
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search workouts" />
      </div>
      <div className="workouts">
        {currentWorkouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
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
      <WorkoutForm />
    </div>
  );
};

export default Home;
