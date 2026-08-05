import Contact from "./contact";

function About({number, email}) {
    const topic = "React";

    return(
        <p>About me: I am learning {topic}. You can contact me through <Contact number={number} email={email}/> </p>
    )
}
export default About;