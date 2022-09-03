import React from "react";
import './RecipeTile.css';

const RecipeTile =({recipe}) =>{

    return (
        <div className="recipeTile">
            <img className="recipeTile_img" src={recipe['recipe']['image']}/>
            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        </div>
    );
}

export default RecipeTile ;