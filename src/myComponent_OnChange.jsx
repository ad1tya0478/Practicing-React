import React, {useState} from 'react';

function Mycomponent_Onchange(){

    // input
    const [name, setName] = useState("Guest");
    const [quantity, setQuant] = useState(0);

    // <textarea>
    const [comment, setComment] = useState("");

    // <select>
    const [payment, setPayment] = useState("");

    // <radio>
    const [shipping, setShipping] = useState("");



    function Handlenamechange(event){
        setName(event.target.value);
    }
    function HandleQuantity(event){
        setQuant(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    
    return(
        <div>
            <input value={name} onChange={Handlenamechange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={HandleQuantity}></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pick-Up" checked={shipping == "Pick-Up"} onChange={handleShippingChange}></input>
                Pick-Up
            </label>
            <br/>
            <label>
                <input type='radio' value="Delivery" checked={shipping == "Delivery"} onChange={handleShippingChange}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default Mycomponent_Onchange