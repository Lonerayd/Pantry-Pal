import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'
import { RecipesContextProvider } from './context/RecipeContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
    // <React.StrictMode>
    <AuthContextProvider>

      <WorkoutsContextProvider>
        <RecipesContextProvider>
       
        <App/>
          
        </RecipesContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
    // </React.StrictMode>
  
);

