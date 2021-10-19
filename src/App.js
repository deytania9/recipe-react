import React,{useEffect, useState}from 'react';
import Recipe from './Recipe';
import './App.css';

const App=()=>{
  const APP_ID='f4f52a3d';
  const APP_KEY="2959807e25dc2813f76521f4cd1f9aea";
  
const [recipes,setRecipes]=useState([]);
const [search, setSearch]=useState('');
const [query, setQuery]=useState('');

  useEffect(() => {
    getRecipes();
  },[query]);

const getRecipes=async()=>{
  const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data=await response.json();
  console.log(data);
  setRecipes(data.hits);
};

  const updateSearch=event=>{
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch= event=>{
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="searchBar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Search</button>        
      </form>
      <div>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.calories}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}  
        url={recipe.recipe.url}   
        />
      ))}
      </div>      
    </div>
  )
}

export default App;
