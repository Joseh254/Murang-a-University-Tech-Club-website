import "./Tracks.css";
function Tracks() {
  return <div>

    <section className="tracks">
      <div className="introduct">
        <h1>Murang'a University Tech Club</h1>
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
    <p>Enroll in the UI/UX Design track and explore the principles of creating user-friendly and visually appealing interfaces.You will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops,  gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, you will be proficient in using industry-standard design tools and techniques, enabling you to create effective, user-centric designs for websites and mobile applications.</p>
  </div>

  
  <div className="them_tracks">
    <h2>Web development </h2>
    <p>Pursue the Web Development track and gain comprehensive knowledge in building dynamic and responsive websites. You learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, you will develop the skills to create both the client-side and server-side of web applications. By the end of the track, you will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.</p>
  </div>

  </div>
{/* ******************************************PART2********************************** */}
  <div className="part2">


  <div className="them_tracks">
    <h2>Mobile apps development  </h2>
    <p> Opt for the Mobile Apps Development track and learn to design and build applications for mobile devices. You will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, you will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, you will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.</p>
  </div>


  <div className="them_tracks">
    <h2>Cloud engineering </h2>
    <p>Choose the Cloud Engineering track and dive into the world of cloud computing and its applications. Youwill learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs,you will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track,you will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.</p>
  </div>



  <div className="them_tracks">
    <h2>Power Platform </h2>
    <p>Sselect the Power Platform track and explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. you will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, you will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, you will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency.</p>
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
