function Profile() {
    const name = "Pranima Bhattarai";
    const age = "19";
    const college = "IIC";
    const language = "React";
    const address = "Itahari";
    // const color = "white";
    // const food = "all";

    return(
        <>
           {/* <p>
            My name is {name}. 
             I am {age} years old.
            My favourite color is {color}.
            I like {food} food.
           </p> */}

            <h1>My Profile</h1>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <p>College: {college} </p>
            <p> Language: {language} </p>
            <p> Address: {address} </p>
            
        </>
    );
}

export default Profile;
