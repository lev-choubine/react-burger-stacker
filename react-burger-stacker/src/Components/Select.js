import React, { Component } from 'react';

class Select extends Component{
       constructor(props){
           super(props)
          
       }  
    
               
    
    render(){
        const ingredients = this.props.selectPass.map((eachItem, index) => {
            console.log(eachItem)
            return <div  id="layer">
                  <li key={index}>{eachItem}</li>
                  
                  </div>
                })
        return(
            <div id="box">
                <h1>Hello!</h1>
                <ul>
                  {ingredients}
                </ul>
                <div id="buttonDiv">
                    <h2>Burger Stacker Here</h2>
                <button onClick={this.props.arr}>Clear</button>
                </div>
            </div>
        )
    }
    
}

export default Select;