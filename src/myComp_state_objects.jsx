import React, {useState} from "react";

function MyComponent_state_objects(){

    const [car, setCar] = useState({year:"2022",make:"BMW",model:"M5 Comp"});

    function handleyearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handlemakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handlemodelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    return(
        <div>
            <p> Your Favourite Car is: {car.make} {car.model} {car.year}</p>
            <input type="text" value={car.make} onChange={handlemakeChange}/>
            <input type="text" value={car.model} onChange={handlemodelChange}/>
            <input type="number" value={car.year} onChange={handleyearChange}/>
        </div>
    )
}

export default MyComponent_state_objects