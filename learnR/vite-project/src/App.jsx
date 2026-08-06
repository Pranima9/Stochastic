import Profile from "./MyComponents/profile";
import Hero from "./MyComponents/hero";
import About from "./MyComponents/about";
import Header from "./MyComponents/header";
import Contact from "./MyComponents/contact";
import Skill from "./MyComponents/skills";
import Chat from "./MyComponents/chat";

import LoginPage from "./MyComponents/LoginPage";

function App() {
    return(
        <>
           <Profile/>

           <Header/>
           <Hero/>
           <About/>
           <Contact/>
           <Skill/>

           <LoginPage/>
           <Chat/>
           
           
        </>
    );
}

export default App;
