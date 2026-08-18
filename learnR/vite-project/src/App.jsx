// import Profile from "./MyComponents/profile";
// import Hero from "./MyComponents/hero";
// import About from "./MyComponents/about";
// import Header from "./MyComponents/header";
// import Contact from "./MyComponents/contact";
// import Skill from "./MyComponents/skills";
// import Chat from "./MyComponents/chat";

// import LoginPage from "./MyComponents/LoginPage";

// function App() {
//     return(
//         <>
//            {/* <Profile/>

//            <Header/>
//            <Hero/>
//            <About/>
//            <Contact/>
//            <Skill/> */}

//            <LoginPage/>
//            {/* <Chat
//            name = "Pranss"
//            message = "hi"
//            time = "3:42am"/>           */}
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
//   const [likes, setlikes] = useState(0);

//   function sayHello(){
//     alert("Hello!")
//   }

//   return (
//    <>
//       <h1>{likes}</h1>
//       <button onClick={()=>setlikes(likes+1)}> like </button>
   
      
//       <button onClick={sayHello}>Click me..</button>  
//       {/* yaha hamile "sayHello()" ma () use nagareko chy hamilai refresh garne bittikai alert message chahiyeko haina so..... clcick garesi matra dekhauna lai () halnuhunna */}
        
//       <button onClick={()=> {alert("Hellooooo!")}}>click hereeee</button>
//    </> 
//   );
  
// } export default App;



// import { useState } from "react";

// function App(){

//   const [name, setName] = useState("Enter your name")

// const [likes, setLikes]= useState(0); {/* useState paxi () ma "number" matra hunuparxa vanera compulasory xaina. Could be boolean, string,  arrays anything */}

//   return(
//     <>
//       <button onClick={()=> setLikes(likes + 1) }> Like </button>
//       <p>{likes}</p>

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




// [][][][][[[[[[[[[ conditional Rendering LOGIN LOGOUT BUTTON]]]]]]]]]


//  import { useState } from "react";

// function App(){

//   const [isLogggedIn, setIsLoggedIn] = useState(false)

//   return(
//     <>
//         {isLogggedIn? (
//         <button 
//           onClick={()=> setIsLoggedIn(false)} 
//           className="bg-red-400 text-white font-bold h-10 rounded-lg p-2 ">
//           Logout
//         </button>
//         ) : (
//         <button onClick={()=> setIsLoggedIn(true)} className="bg-blue-400 text-white font-bold h-10 rounded-lg p-2 ">
//           Login
          
//         </button>)}
//     </>
//   )

// } export default App;




// [][][[[[[[[[ ARRAYS ]]]]]]]]

// function App(){

//   // const fruits = ["Apple", "Banana", "Mango"];
//   // const foods = ["Pizza", "Momo", "Burger"];

//   const phones = [
//       {
//         brand: "Samsung",
//         model: "S25",
//         price: "250000"
//       }, 
//       {
//         brand: "Apple",
//         model: "iPhone15pro",
//         price: "250000"
        
//       },
//       {
//         brand: "Google",
//         model: "Pixel",
//         price: "250000"
//       }
//     ];

//   return(
//     <>
//       {/* {fruits.map((fruit) => (
//       <p key = {fruit}>{fruit}</p>
//       ))}       */}

//       {/* {foods.map((food) => (
//         <p key={food}>   {foods}   </p> 
//       ))} */}

//       <h1>Phones</h1>

//       {phones.map((phone) => (
//         <div key={phone.model}>
//           <h2>{phone.brand}</h2>
//           <p> Model: {phone.model}</p>
//           <p> Price: {phone.price}</p>
//         </div>
//       ))}

//     </>
//   )

// } export default App;

// function App(){

//   const students = [
//       {
//         name: "Aashish Sapkota",
//         age: "23",
//         course: "IT"
//       }, 
//       {
//         name: "Shireen Sharma",
//         age: "25",
//         course: "Science"
//       }, 
//       {
//         name: "Preeti Basnet",
//         age: "21",
//         course: "Law"
//       }, 
//     ];

//   return(
//     <>
//       <h1>Students</h1>

//       {students.map((student) => (
//         <div key={student.name}>
//           <h2>{student.name}</h2>
//           <p> Age: {student.age}</p>
//           <p> Course: {student.course}</p>
//         </div>
//       ))}

//     </>
//   )

// } export default App;



// [[[[[[[[[[[[ ARRAYS + STATE ]]]]]]]]]]]]

// import { useState } from "react";

// function App(){

//   const [tasks, setTasks] = useState([
//     "Learn React",
//     "Learn JS"
//   ]);

//   const [newTask, SetNewTask] = useState("")

//   return(
//     <>
//       {tasks.map((task) => (
//       <p key={task}> {task} </p>
//       ))}

//       <input onChange={(event)=> SetNewTask(event.target.value)} />   
//       {/*When the input changes, take whatever the user typed and save it in newTask*/}

//       <button onClick={()=> setTasks([...tasks, newTask])}>
//         Add Task
//       </button>
//     </>
//   );

// } export default App;

// [[[[[[[[[ + - reset ]]]]]]]]]

// import { useState } from "react";

// function App(){

//   const [count, setCount] = useState(0);

//   return(
//     <>
//       Count: {count}
//     </>
//   );

// } export default App;



// to manage