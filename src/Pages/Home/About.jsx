import "./About.css";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
function Social({ icon, description }) {
  return (
    <section className="socials">
      <p>
        {icon} {description}
      </p>
    </section>
  );
}
function About() {
  return (
    <div className="about">
      <div className="socials">
        <p>Our social platforms</p>
      <div className="media"> 

      <Social icon={<FaInstagramSquare />} description={<Link to="https://www.w3schools.com/tags/tag_select.asp" target="blank">Instagram</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://www.w3schools.com/tags/tag_select.asp" target="blank">Facebook</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://www.w3schools.com/tags/tag_select.asp" target="blank">Twitter</Link>} />
      </div>
      </div>

      <div className="vision">
        <h1>About us</h1>
        <h2>Our vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          harum molestias rerum, numquam, consectetur in, reiciendis dolorem
          inventore itaque temporibus sed ipsa! Molestias est obcaecati officia
          deserunt odit non enim.
        </p>
      </div>
    </div>
  );
}

export default About;
