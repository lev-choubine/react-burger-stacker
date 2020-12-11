

function Stack (props) {
    console.log(props.stackFood)
    const burger = props.stackFood.map((eachItem, index)=>{
        return <div>
               <li key={index}>{eachItem}</li>
               </div>
    })
    return (
        <div id="stack">
            <h1>Food Here!</h1>
            <button>Clear</button>
            <ul>
            {burger}
            </ul>
        </div>
    )
}

export default Stack;