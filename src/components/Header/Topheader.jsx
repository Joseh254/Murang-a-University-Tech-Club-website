import { MdOutlineMailOutline } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
function Social_accounts({ icon, content }) {
  return (
    <div className="social_accounts">
      <div className="icons">{icon}</div>
      <p>{content}</p>
    </div>
  );
}
function Topheader() {
  return (
    <>
      <section className="topHeader">
        <div className="welcome">
          <img src="src\assets\logo.jpeg" alt="logo" />
          <h1>Murang'a University Tech Club</h1>
        </div>
        <div className="accounts">
          <Social_accounts
            icon={<MdOutlineMailOutline />}
            content={"mutc@gmail.com"}
          />
          <Social_accounts
            icon={<FaUniversity />}
            content={"Murang'a University"}
          />
          <Social_accounts icon={<FaSquarePhone />} content={"+254768163608"} />
        </div>
      </section>
    </>
  );
}

export default Topheader;
