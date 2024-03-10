import { Link } from "react-router-dom";
import { AvatarSVG, Dribble, Email, Figma, Linkedin , Mehboob} from "../../assets/image";
import { FaPhone, FaLocationDot, FaLink, FaEnvelope } from "react-icons/fa6";
import Switch from "../common/Switch";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={Mehboob} alt="avatar" className="avatar" />
              {/* <img src={AvatarSVG} alt="avatar" className="avatar" /> */}
              <h1 className="header-name text-white">
                Mahboob Alam, <br />
                Full Stack Developer/
                Oracle Apex Developer/ 
                MERN Stack Developer 
              </h1>
            </div>
            <Switch />
            <p className="header-text text text-white">
              As a full stack developer, I highly value the ability to bring a client’s
              vision to life, which is very rewarding. There is a huge amount of
              satisfaction I gain from seeing a piece of work from idea to
              design, especially when it appears in the user hands. I believe
              the user-centred solutions are the most valuable future digital
              resources.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">mahboob30699@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+92 3036243676</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Johar Town Lahore</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Github:{" "}
                  <Link to='https://github.com/Mahboob30699' className="text">
                  https://github.com/Mahboob30699
                  </Link>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <Link to="/">
                  <img src={Dribble} />
                  <span className="tooltip text">Dribble</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Linkedin} alt="" />
                  <span className="tooltip text">Linkedin</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Email} alt="" />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Figma} alt="" />
                  <span className="tooltip text">Figma</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
