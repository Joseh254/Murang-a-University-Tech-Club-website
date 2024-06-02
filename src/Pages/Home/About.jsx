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

      <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/Joseh254" target="blank" className="link">Instagram</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/Joseh254" target="blank" className="link">Facebook</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/Joseh254" target="blank" className="link">Twitter</Link>} />
      </div>
      </div>

      <div className="vision">
        <h1>About us</h1>
        <h2>Our vision</h2>
        <p>
        "To become a leading hub of technological excellence and innovation within the university, inspiring future leaders in technology and driving impactful contributions to society
        </p>


        <h2>Our mission</h2>
        <p>
        To Advance Knowledge And Technological Transfer Through Teaching, Training, Learning, Research, Innovation, Consultancy And Community Engagement For Sustainable Development.
        </p>
      </div>
    </div>
  );
}

export default About;
