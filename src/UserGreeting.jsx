

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please Log in to continue</h2>
    // }

    return(props.isLoggedIn ? <h2 className = "welcome-msg">Welcome {props.username}</h2> : <h2 className="login-prompt">Please Log in to continue</h2>);

}
export default UserGreeting