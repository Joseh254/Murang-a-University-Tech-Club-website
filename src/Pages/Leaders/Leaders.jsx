import "./Leaders.css";
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
            <Social icon ={<FaInstagramSquare/>}/>
            <Social icon ={<FaXTwitter/>}/> 
          </div>
        </div>
        {/* **************************************************************************************************8 */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Victory Njeri" />
          <h1>Victory Njeri</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
        </div>
        {/* ****************************************************************************************************8 */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="allan" />
          <h1>Allan Muhari</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
        </div>
        {/* ************************************************************************************************* */}
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="bridget" />
          <h1>Bridget Gitonga</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, b.
          </p>
          <div className="media"> 


</div>
        </div>
        {/* ******************************************************************************************************* */}
      </div>

      <div className="ourleaders">
        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Ruth Mutisya" />
          <h1>Ruth Mutisya</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,.
          </p>
        </div>
        {/* ********************************************************************************************* */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Webster Ifedha" />
          <h1>Webster Ifedha</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,.
          </p>
        </div>

        {/* ********************************************************************************************8 */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Manase Gunga" />
          <h1>Manase Gunga</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
        </div>

        {/* ******************************************************************************************** */}

        {/* ********************************************************************************************* */}

        <div className="ndia">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Carolyne Githenduka</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, Dr. Ndia has been
            instrumental in guiding the club's activities and initiatives..
          </p>
        </div>

        {/* ********************************************************************************************8 */}
      </div>
    

        {/* ******************************************************************************************** */}

        <div className="bottom">
        <div className="ndiaa">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Carolyne Githenduka</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology, Dr. Ndia has been
            instrumental in guiding the club's activities and initiatives..
          </p>
        </div>

        <div className="aquote">
          <h7>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores atque esse. Sed cum corrupti delectus asperiores itaque, consequatur minus possimus dolorem sint ducimus iste, blanditiis corporis atque. Consequuntur, nemo.</h7>
        </div>
        </div>

        {/* ********************************************************************************************8 */}
      

      {/* ********************************************************************************************8 */}
    </section>
  );
}
export default Leaders;
