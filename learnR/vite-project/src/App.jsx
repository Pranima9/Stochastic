// import Profile from "./MyComponents/profile";
// import Hero from "./MyComponents/hero";
// import About from "./MyComponents/about";
// import Header from "./MyComponents/header";
// import Contact from "./MyComponents/contact";
// import Skill from "./MyComponents/skills";
// import Chat from "./MyComponents/chat";

// // import LoginPage from "./MyComponents/LoginPage";

// function App() {
//     return(
//         <>
//            {/* <Profile/>

//            <Header/>
//            <Hero/>
//            <About/>
//            <Contact/>
//            <Skill/>

//            <LoginPage/> */}
//            <Chat
//            name = "Pranss"
//            message = "hi"
//            time = "3:42am"/>          
//         </>
//     );
// }

// export default App;




// [][][][][][][][]




// function Car(props) {
//   return (
//     <>
//       <h2>Car Details</h2>
//       <p>Brand: {props.brand}</p>
//       <p>Model: {props.model}</p>
//       <p>Year: {props.year}</p>
//       <hr />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Car brand="Toyota" model="Corolla" year={2024} />
//       <Car brand="Honda" model="Civic" year={2023} />
//       <Car brand="Tesla" model="Model 3" year={2025} />
//     </>
//   );
// }

// export default App;




// [][][][][ CREATED COUNTING BUTTON USING USESTATE ][][[[[[[]]]]]]

// import { useState } from "react";


// function App() {
//   // const [likes, setlikes] = useState(0);

//   function sayHello(){
//     alert("Hello!")
//   }

//   return (
//    <>
//       {/* <h1>{likes}</h1>
//       <button onClick={()=>setlikes(likes+1)}> like </button> */}
   
      
//       <button onClick={sayHello}>Click me..</button>  
//       {/* yaha hamile "sayHello()" ma () use nagareko chy hamilai refresh garne bittikai alert message chahiyeko haina so..... clcick garesi matra dekhauna lai () halnuhunna */}
        
//       <button onClick={()=> {alert("Hellooooo!")}}>click hereeee</button>
//    </> 
//   );
  
// } export default App;



// import { useState } from "react";

// function App(){

//   const [name, setName] = useState("Enter your name")

// // const [likes, setLikes]= useState(0); {/* useState paxi () ma "number" matra hunuparxa vanera compulasory xaina. Could be boolean, string,  arrays anything */}

//   return(
//     <>
//       {/* <button onClick={()=> setLikes(likes + 1) }> Like </button>
//       <button onClick={()=> setLikes(likes - 1) }> Unlike </button>
//       <p>{likes}</p> */}

//       <input type="text" name="" id="" />
//       <button onClick={()=> setName(name)}> Okay </button>

//     </>
//   )

// } export default App;


// []][[][][[[[[[  NAME DISPLAY ]]]]]]]

// import { useState } from "react";

// function App(){

//   const [name, setName] = useState("")

//   return(
//     <>
      
//       <p>Your name is: {name}</p>
//       <input onChange={(event)=> setName(event.target.value)} /> 
//        {/* event => k change vayo // event.target => kaha change vayo // event.target.value => change vayesi ko value */}
//       <br />
//       {/* <button onClick={()=> setName("Pranima")}> Okay </button> */}
//     </>
//   )

// } export default App;




// [][][][][[[[[[[[[ conditional Rendering ]]]]]]]]]

 import { useState } from "react";

function App(){

  const [isLogggedIn, setIsLoggedIn] = useState(false)

  return(
    <>
        {isLogggedIn? (
        <button 
          onClick={()=> setIsLoggedIn(false)} 
          className="bg-red-400 text-white font-bold h-10 rounded-lg p-2 ">
          Logout
        </button>
        ) : (
        <button onClick={()=> setIsLoggedIn(true)} className="bg-blue-400 text-white font-bold h-10 rounded-lg p-2 ">
          Login
          
        </button>)}
    </>
  )

} export default App;