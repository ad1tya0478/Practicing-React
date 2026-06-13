import React, {useState} from "react"

function State_array(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Pasta"])

    function addfood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood])
    }
    function removeFood(index){

        setFoods(foods.filter((_, i) => i !== index))

    }

    return(
        <div>
            <h2>List Of Eating Items</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => removeFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name"/>
            <button onClick={addfood}>Add Food</button>
        </div>
    )
}

export default State_array