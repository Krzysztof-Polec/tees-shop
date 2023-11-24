import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return(
    <header>
      <div className="header-left-panel">
        <Link to={"/"}>TEESSHOOP</Link>
        <div>Mężczyźni</div>
        <div>Kobiety</div>
        <div>Dzieci</div>
        <div>Nowości</div>
      </div>
      <div className="header-right-panel">
        <div>Login</div>
        <div>Pomoc</div>
        <div>Kontakt</div>
      </div>
    </header>
  )
}

export default Header