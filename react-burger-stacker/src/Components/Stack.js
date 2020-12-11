import Select from "./Select"

function Stack (props) {
    console.log('Stack js says hi' + props.stackFood)
    // const burger = props.stackFood.map((eachItem, index)=>{
    //     return <div>
    //            <li key={index}>{eachItem}</li>
    //            </div>
    // })
    const selectPass = props.stackFood
    return (
        <div id="stack">
            <h1>Food Here!</h1>
            <button>Clear</button>
            <ul>
            <Select selectPass={selectPass}/>
            </ul>
            
        </div>
    )
}

export default Stack;