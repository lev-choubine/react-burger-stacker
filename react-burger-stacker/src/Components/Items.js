import React, { useState  } from 'react';
import Stack from './Stack'

const filteredFoods = [];

function Items(props){
    const [ingredientsToAdd, setIngredientsToAdd] = useState([])
    
    const addIngredients = (e) => {
        e.preventDefault()
      
         filteredFoods.push(e.target.value)
         setIngredientsToAdd(filteredFoods)
         console.log(ingredientsToAdd)
       
        
    }

    const ingredients = props.food.map((eachItem, index) => {
        return <div>
               <form>
               <label for="burgerAdd" key={index}>{eachItem.name}</label>
               <button id="burgerAdd" value={eachItem.name} onClick={addIngredients}>add to your burger</button>  
               </form>
               </div>
    })

    

    return(
        <div>
        <div id="foodList">
        <h1>Food Here!</h1>
        <ul>
        {ingredients}
        </ul>
        </div>
        <Stack stackFood={ingredientsToAdd}/>
        </div>
    )
}

export default Items;