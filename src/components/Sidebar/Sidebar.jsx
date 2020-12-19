import "./Sidebar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/dp.jpg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} className="logoo" alt="logo" />
          <h1>Finacular</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fas fa-th-large"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-inbox" aria-hidden="true"></i>
          <a href="#">Assets</a>
        </div>
        <div className="sidebar__link">
          <i className="far fa-chart-bar"></i>
          <a href="#">Tracker</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-clipboard"></i>
          <a href="#">Planning & Advisory</a>
        </div>
        
        <div className="sidebar__logout">
          <img src={profile} className="prof" />
          <a href="#">Sankalan</a>
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;