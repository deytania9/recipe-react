import React from "react";

const Recipe=({title, calories, image, ingredients,url})=>{
    return(
        <div className='recipes'>
            <h1>{title}</h1>
            <p className="calories">Calories: {calories}</p>
            <img src={image} alt=""/>
            <h3>Ingredients:</h3>
            <ul className="check-list">
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className="link"><a href={url} target="_blank"> Click here</a> to see how to prepare this</p>
        </div>
    )
}

export default Recipe;