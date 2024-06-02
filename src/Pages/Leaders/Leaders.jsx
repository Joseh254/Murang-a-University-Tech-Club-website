import "./Leaders.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Social({ icon, description }) {
  return (
    <section className="socials">
      <p>
        {icon} {description}
      </p>
    </section>
  );
}

function Leaders({fb,ig,x,ln}) {
  return (
    <section className="Leaders">
      <div className="introduction">
        <h1>
          Meet the Leadership Team of Murang'a University Tech Club (MUTC)
        </h1>
        <p>Dedicated Leaders Driving Innovation and Excellence </p>
      </div>
      {/* **************************************************************************************88 */}
      <div className="ourleaders">
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="dr John ndia" />
          <h1>Dr. John Ndia</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of c

          </p>

          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaLinkedin/>}/>
            <Social icon ={<FaXTwitter/>}/> 
          </div>
        </div>
        {/* **************************************************************************************************8 */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Victory Njeri" />
          <h1>Victory Njeri</h1>
          <p>
          Victory Njeri is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
          <div className="iconss">

          <Social icon ={<FaXTwitter/>}/>
            <Social icon ={<FaLinkedin/>}/> 
          </div>
        </div>
        {/* ****************************************************************************************************8 */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="allan" />
          <h1>Allan Muhari</h1>
          <p>
          Allan Muhari is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/> 
          </div>
        </div>
        {/* ************************************************************************************************* */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="bridget" />
          <h1>Bridget Gitonga</h1>
          <p>
          Bridget Gitonga is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, b.
          </p>
          <div className="media"> 
        </div>

        <div className="iconss">
            <Social icon ={<FaLinkedin/>}/>
            <Social icon ={<FaXTwitter/>}/> 
          </div>
        </div>
        {/* ******************************************************************************************************* */}
      </div>

      <div className="ourleaders">
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Ruth Mutisya" />
          <h1>Ruth Mutisya</h1>
          <p>
          Ruth Mutisya is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,.
          </p>

          <div className="iconss">
          
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaLinkedin/>}/> 
          </div>
        </div>
        {/* ********************************************************************************************* */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Webster Ifedha" />
          <h1>Webster Ifedha</h1>
          <p>
          Webster Ifedha is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,.
          </p>

          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/> 
            <Social icon ={<FaLinkedin/>}/> 
          </div>
        </div>

        {/* ********************************************************************************************8 */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Manase Gunga" />
          <h1>Manase Gunga</h1>
          <p>
          Manase Gunga is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>

          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/>
            <Social icon ={<FaLinkedin/>}/>  
          </div>
        </div>

        {/* ******************************************************************************************** */}

        {/* ********************************************************************************************* */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Carolyne Githenduka</h1>
          <p>
          Carolyne Githenduka is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, Dr. Ndia has been
            instrumental in guiding the club's activities and initiatives..
          </p>

          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/> 
            <Social icon ={<FaLinkedin/>}/> 
          </div>
        </div>

        {/* ********************************************************************************************8 */}
      </div>
    

        {/* ******************************************************************************************** */}

        <div className="bottom">
        <div className="ndiaa">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Carolyne Githenduka</h1>
          <p>
           Carolyne Githenduka is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, Dr. Ndia has been
            instrumental in guiding the club's activities and initiatives..
          </p>

          <div className="iconss">
          <Social icon ={<FaFacebookF/>}/>
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/>
            <Social icon ={<FaLinkedin/>}/>  
          </div>
        </div>

        <div className="aquote">
          <h7>"Meet the dedicated leaders of the Murang'a University Tech Club (MUTC). Each member of our leadership team brings a wealth of experience, innovation, and passion, driving the club towards excellence and fostering a thriving tech community.</h7>
        </div>
        </div>

        {/* ********************************************************************************************8 */}
      

      {/* ********************************************************************************************8 */}
    </section>
  );
}
export default Leaders;
