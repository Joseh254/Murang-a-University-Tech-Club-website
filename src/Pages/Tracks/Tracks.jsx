import "./Tracks.css";
function Tracks() {
  return <div>

    <section className="tracks">
      <div className="introduct">
        <h1>This is a heading in track section</h1>
        <p>"Explore the diverse range of courses offered by the Murang'a University Tech Club (MUTC). From Cyber Security to Mobile App Development, our courses are designed to equip students with cutting-edge skills and knowledge in various tech fields, led by experienced professionals dedicated to your success</p>
      </div>

      {/* ********************************PART1**************************************************************** */}
  <div className="partone">

  <div className="them_tracks">
    <h2>Cyber security</h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>


  <div className="them_tracks">
    <h2>UI/UX design</h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>

  
  <div className="them_tracks">
    <h2>Web development </h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>

  </div>
{/* ******************************************PART2********************************** */}
  <div className="part2">


  <div className="them_tracks">
    <h2>Mobile apps development  </h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>


  <div className="them_tracks">
    <h2>Cloud engineering </h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>



  <div className="them_tracks">
    <h2>Power Platform </h2>
    <p>Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
  </div>

  </div>
{/* ********************************************************************8 */}


<div className="apply">
  <h1>"Unlock your potential by enrolling in the course of your choice at Murang'a University Tech Club (MUTC). Whether you're passionate about Cyber Security, UI/UX Design, Web Development, or Mobile App Development, we have the perfect course for you. Join us and start your journey towards tech excellence today!</h1>
</div>



  <section className="form">
    <form className="theform"> 

  <div className="contacts" id="fullname">
  <label htmlFor="fullname">Full Name</label>
  <input type="text" placeholder="Full Name" required />
  </div>

  <div className="contacts" id="email">
  <label htmlFor="email">Email Address</label>
  <input type="email"  placeholder="Email adress" required/>
  </div>

  <div className="contacts" id="course">
  <label htmlFor="course">Current Course</label>
  <input type="text" placeholder="Current Course"required />
  </div>

  <div className="contacts" id="yearofstudy">
  <label htmlFor="yearofstudy">Year Of Study</label>
  <input type="text" placeholder="Year of Study" required />
  </div>

  <div className="contacts" id="tracks">
  <label htmlFor="selecttracks">Select Your Desired Track</label>
  
   <select name="Cyber Security" id="courses" className="contacts">
    <option value="Cyber Security">Cyber Security</option>
    <option value="UI/UX design">UI/UX design</option>
    <option value="Web development">Web development</option>
    <option value="Mobile apps development">Mobile apps development</option>
    <option value="Cloud engineering">Cloud engineering</option>
    <option value="Power Platform">Power Platform</option>
  
  </select>
  </div>

  <div>
  <button id="submit" className="contacts button" > Submit</button>
  </div>
    </form>

    <div className="quote">
      <h1>"Programming isn't about what you know; it's about what you can figure out. The best coders are always learning, adapting, and finding new ways to solve problems. It's a journey of continuous discovery and innovation, driven by curiosity and the desire to create something amazing..</h1>
    </div>

  </section>
{/* *************************************************************************8 */}
    </section>
  </div>;
}
export default Tracks;
