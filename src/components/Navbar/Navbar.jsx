import "./Navbar.css";


const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fas fa-bell" aria-hidden="true"></i>
        </a>
      
      </div>
    </nav>
  );
};

export default Navbar;