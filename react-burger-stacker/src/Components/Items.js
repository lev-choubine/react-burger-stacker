import React, { Component  } from 'react';
import Stack from './Stack'

let filteredFoods = [];

class Items extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ingredients: []
        };
       
    }
    
    
   addIngredients = (e) => {
        e.preventDefault();
         const color=document.getElementById('color')
         console.log(color.value)
         filteredFoods.unshift(e.target.value)
         this.setState({ingredients: filteredFoods})
         
       
        
    }
    wipeOutTheFoodArray =(e)=>{
        e.preventDefault();
        
        e.preventDefault()
      filteredFoods = []
      this.setState({ingredients:[]})
    }
  

    
  render(){
    const ingredients = this.props.food.map((eachItem, index) => {
        return <div id="foodItem"> 
               <form>
                  
               <label id="label" for="burgerAdd" key={index}>{eachItem.name}</label>
               <input id="color" type="hidden" name="color" value={eachItem.color} />
               <button  id="burgerAdd" value={eachItem.name} onClick={ this.addIngredients}> -> </button>  
               </form>
               </div>
    })
    return(
        <div id="flexDad">
        
        <div id="foodList">
        <h1>Ingredients</h1>
        <ul >
        {ingredients}
        </ul>
        </div>
        <div id="stack">
        <div  >
        <Stack stackFood={this.state.ingredients} delete={this.wipeOutTheFoodArray}/>
        </div>
        </div>
        </div>
    )

  }

}

export default Items;