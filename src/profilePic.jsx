
function ProfilePicture(){

    const imageUrl = './src/assets/Napoleon_sainthelene.jpg';

    // const HandleClick = () => alert('There is nothing we can do.')

    const HandleClick = (e) => e.target.style.display = "none";

    return(
        <img src={imageUrl} onClick={(e) => HandleClick(e)}></img>
    )

}
export default ProfilePicture