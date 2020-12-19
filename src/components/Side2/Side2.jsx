import "./Side2.css";
import logo from "../../assets/avatar.png";
import logoo from "../../assets/aavatar.png";

const Side2 = ({}) => {
  return (
    <div  id="side2">
      <div className="sidebar__title">
        <button><h3><i class="fas fa-bolt"></i> Actions</h3></button>
       
      </div>

      
      <div className="card2">
      
      <div className="card_header"><img src={logo} />
      <p>Understand the Power of Compunding</p>
      </div>
      <div className="card_inner">
        <button className="learn">Learn More</button>
        <span className="font-bold text-title"></span>
      </div>
    </div>
      <div className="card2">
      
      <div className="card_header"><img src={logoo} />
      <p>Track all your expences on a daily basis</p>
      </div>
      <div className="card_inner">
        <button className="learn">Learn More</button>
        <span className="font-bold text-title"></span>
      </div>
    </div>
    </div>
  );
};

export default Side2;