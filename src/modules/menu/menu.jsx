import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <NavLink to='/profile'>Профиль</NavLink>
        </li>
        <li>
          <NavLink to='/friends'>Друзья</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
