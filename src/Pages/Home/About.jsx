import "./About.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
function Social({icon,description}){
    return(
        <section  className="socials">
        <p>{icon} {description}</p>
        </section>
    )
}
function About(){
    return(

     <div className="about">
        <Social icon={<FaInstagramSquare/>} description={"Instagram"}/>
        <Social icon={<FaFacebookF/>} description={"facebook"}/>
        <Social icon={<FaXTwitter/>} description={"Twitter"}/>

        <div className="vision">
            <h1>Our vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum harum molestias rerum, numquam, consectetur in, reiciendis dolorem inventore itaque temporibus sed ipsa! Molestias est obcaecati officia deserunt odit non enim.</p>
        </div>
     </div>
       
    )
}

export default About;