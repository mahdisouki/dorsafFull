import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css'
function SiderBar() {
  return (
    <div>
      <div id="sidebarrr">
        <header>
          <span><img src='/logo.png' style={{width:"10rem",height:'7rem'}} alt="logo" /></span>
        </header>
        <ul className="navv">
          <li>
            <Link to="/GestionLibrairie">
              <i className="fa-solid fa-laptop"></i> GestionLibrairie
            </Link>
          </li>
          <li>
            <Link to="/GestionBooks">
              <i className="fa-solid fa-house"></i> GestionBooks
            </Link>
          </li>
          {/* <li>
            <Link to="/GestionTransfert">
              <i className="fa-solid fa-money-check-dollar"></i> GestionTransfert 
            </Link>
          </li> */}
          {/* <li>
            <Link to="#">
              <i className="fa-solid fa-cart-shopping"></i> Mes Demandes
            </Link>
          </li> */}
          <li>
            <Link to="/GestionUser">
              <i className="fa-solid fa-comment"></i> GestionUser
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SiderBar;
