import "./Events.css";
import { IoLocationSharp } from "react-icons/io5";

function Locations({ venue }) {
  return (
    <div>
      <p><IoLocationSharp /> {venue}</p>
    </div>
  );
}

function Events() {
  return (
    <section className="timetable">

      <div className="schedule">
        <p>"Learning at Murang'a University Tech Club (MUTC) is structured to fit your busy
           schedule. Courses are offered throughout the week, with flexible evening 
           classes from Monday to Friday. Each session is designed to provide intensive, 
           hands-on learning experiences, ensuring you gain practical skills and knowledge
            efficiently.</p>
      </div>

        <div className="head">
        <div className="cyber">
        <div className="time">
          <p>4pm - 7pm</p>
          <h3>Monday</h3>
        </div>
        <div className="courses">
          <p>Cyber Security</p>
          <p>Led by: Webster Ifedha</p>
          <Locations venue="lab F04" />
        </div>
      </div>
        </div>

      {/* ****************************************************************** */}
      <div className="foot">
      <div className="cyber">
        <div className="time">
          <p>5pm - 8pm</p>
          <h3>Tuesday</h3>
        </div>
        <div className="courses">
          <p>UI/UX</p>
          <p>Led by: Manase Gunga</p>
          <Locations venue="lab F04" />
        </div>
      </div>
      </div>

      {/* ****************************************************************** **/}
      <div className="head">
      <div className="cyber">
        <div className="time">
          <p>6pm - 9pm</p>
          <h3>Wednesday</h3>
        </div>
        <div className="courses">
          <p>Web Development</p>
          <p>Led by: Carolyne Githenduka</p>
          <Locations venue="lab F04" />
        </div>
      </div>
      </div>

      {/* ****************************************************************** */}
      <div className="foot">
      <div className="cyber">
        <div className="time">
          <p>4pm - 7pm</p>
          <h3>Thursday</h3>
        </div>
        <div className="courses">
          <p>Mobile Apps Development</p>
          <p>Led by: Stanley Amunze</p>
          <Locations venue="lab F04" />
        </div>
      </div>
      </div>

      {/* ****************************************************************** */}
      <div className="head">
      <div className="cyber">
        <div className="time">
          <p>3pm - 6pm</p>
          <h3>Friday</h3>
        </div>
        <div className="courses">
          <p>Cloud Engineering</p>
          <p>Led by: Paul Karanja</p>
          <Locations venue="lab F04" />
        </div>
      </div>
      </div>

      {/* ****************************************************************** */}
        <div className="foot">
        <div className="cyber">
        <div className="time">
          <p>1pm - 4pm</p>
          <h3>Monday</h3>
        </div>
        <div className="courses">
          <p>Power Platform</p>
          <p>Led by: Evyonn Mbithe</p>
          <Locations venue="lab F04" />
        </div>
      </div>
        </div>

      {/* ****************************************************************** */}
    </section>
  );
}

export default Events;
