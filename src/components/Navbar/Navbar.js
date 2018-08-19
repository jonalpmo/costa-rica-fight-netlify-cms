import React from 'react'
import Link from 'gatsby-link'
import './styles.css';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="header__container">
      <Link className="header__category-link" to="/">Inicio</Link>
      <Link className="header__category-link" to="/products">Eventos</Link>
      <Link className="header__category-link" to="/">Noticias</Link>
      <Link className="header__category-link" to="/">Galería</Link>
      <Link className="header__category-link" to="/">Contacto</Link>
    </div>
  </nav>
)

export default Navbar
