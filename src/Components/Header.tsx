import { NavLink } from "react-router-dom";
import { HeaderContainerstl, HeaderExternalLinkstl, LinksContainerstl, Logostl, NavBarstl, NavLinksstl } from "./StyleClasses";

function Header() {
  return (
    <header>
      <div className={ HeaderContainerstl }>
        <h1 className={ Logostl }>{'{ Guilherme Oliveira }'}</h1>
        <nav className={ NavBarstl }>
          <NavLink className={ NavLinksstl } to="/">Home</NavLink>
          <NavLink className={ NavLinksstl } to="projects">Projetos</NavLink>
        </nav>
        <div className={ LinksContainerstl }>
          <a className={ HeaderExternalLinkstl } target="_blank" href="https://github.com/gui-oliveira-dev">GitHub</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
