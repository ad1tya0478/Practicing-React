import profilePic from './assets/Napoleon_sainthelene.jpg'

function Card(){
    return(
        <div className="card">
            <img className="img-profile" src={profilePic} alt="profile picture"></img>
            <h2>Aditya Sharma</h2>
            <p>I am Studying React Right now and Aim to beome a full stack web dev.</p>
        </div>
    );
}

export default Card