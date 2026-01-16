import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand" href="#">
          FoodStore
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
