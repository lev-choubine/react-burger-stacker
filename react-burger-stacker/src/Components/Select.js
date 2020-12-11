function Select(props){
    const ingredients = props.selectPass.map((eachItem, index) => {
        return <div>
              <li key={index}>{eachItem}</li>
              </div>
            })
               
    
    
    return(
        <div>
            <h1>Hello!</h1>
            <ul>
              {ingredients}
            </ul>
           
        </div>
    )}

export default Select;