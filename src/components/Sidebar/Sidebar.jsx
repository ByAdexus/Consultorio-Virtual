import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#" className="logo">
        <i className='bx bx-code-alt'></i>
        <div className="logo-name"><span>Inotech</span>Medic</div>
      </a>

      <ul className="side-menu">
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className='bx bxs-dashboard'></i>Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className='bx bx-store-alt'></i>Tienda
          </NavLink>
        </li>
        <li>
          <NavLink to="/consultation" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className='bx bx-analyse'></i>Consultorio
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>
            <i class='bx bx-support'></i>Soporte
          </NavLink>
        </li>
        <li>
          <NavLink to="/querylog" className={({ isActive }) => isActive ? 'active' : ''}>
            <i class='bx bx-folder' ></i>Registro de consultas
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
            <i className='bx bx-cog'></i>Configuración
          </NavLink>
        </li>
      </ul>

      <ul className="side-menu">
        <li>
          <NavLink to="/logout" className="logout">
            <i className='bx bx-log-out-circle'></i>Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
