import React, { Component  } from 'react';
import Stack from './Stack'

const filteredFoods = [];

class Items extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ingredients: []
        };
       
    }
    
    
   addIngredients = (e) => {
        e.preventDefault();
      
         filteredFoods.push(e.target.value)
         this.setState({ingredients: filteredFoods})
         
       
        
    }

  

    
  render(){
    const ingredients = this.props.food.map((eachItem, index) => {
        return <div>
               <form>
                  
               <label for="burgerAdd" key={index}>{eachItem.name}</label>
               <button id="burgerAdd" value={eachItem.name} onClick={ this.addIngredients}>add to your burger</button>  
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
        <Stack stackFood={this.state.ingredients}/>
        </div>
    )

  }

}

export default Items;