import React from 'react';
import './Navbar.css'; // Estilos específicos para la navbar

const Navbar = () => {
  return (
    <div className="content">
      <nav>
        {/* Menú (Hamburguesa) */}
        <i className='bx bx-menu'></i>

        {/* Formulario de búsqueda */}
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button className="search-btn" type="submit">
              <i className='bx bx-search'></i>
            </button>
          </div>
        </form>

        {/* Cambio de tema */}
        <input type="checkbox" id="theme-toggle" hidden />
        <label htmlFor="theme-toggle" className="theme-toggle"></label>

        {/* Notificaciones */}
        <a href="#" className="notif">
          <i className='bx bx-bell'></i>
          <span className="count">12</span>
        </a>

        {/* Perfil */}
        <a href="#" className="profile">
          <img src="images/logo.png" alt="Profile" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
