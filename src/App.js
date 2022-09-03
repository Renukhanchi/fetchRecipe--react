import './App.css';
import './Key.js';
import axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';


function App() {
const [query,setquery] =useState([]);  
const [recipes,setrecipes] = useState([]);
const [healthLabels,sethealthLabels] = useState('vegan');

  const YOUR_APP_ID = "f4bb68f9" ;
  const YOUR_APP_KEY= "d722f0e123b2ae4ba1d15a2f8f229afa " ;
  
var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

async function getRecipes(){
  var result = await axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}

const onsubmit = (e) =>{
  e.preventDefault();
  getRecipes();
}

  return (
    <div className='app'>
       <h1>Food Recipe Plaza</h1>
       <form
       onSubmit={onsubmit}
       className='app_searchForm'>

        <input 
        type="text" 
        className='app_input'
        placeholder="enter ingridient" 
        value={query } 
        onChange={(e)=> setquery(e.target.value) }/>

        <input type="submit" 
        className='app_submit'
        value="Search" />

       </form>

       <div className='app_recipes'>
         {recipes.map((recipe) => {
           return (
            <RecipeTile recipe={recipe}/>
           )
         })}

       </div>
    </div>
  );
}

export default App;
