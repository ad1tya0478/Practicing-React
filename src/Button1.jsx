
function Button(){

    // function HandleClick(){
    //     alert('Hello Fellas');
    // }
    // const handleclick2 = (name) => alert(`${name} stop clicking me`);

    // let count = 0;
    // const HandleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         alert(`${name} you clicked me ${count} times`)
    //     } else {
    //         alert('Fuck Off NOW!!')
    //     }
    // }


    const handle = (e) => e.target.textContent = "Fuck Off";

    return(
        <button onClick={(e) => handle(e)}>Click me</button>
    )
}

export default Button