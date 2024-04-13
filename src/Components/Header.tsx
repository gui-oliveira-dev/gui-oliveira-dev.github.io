import { NavLink } from "react-router-dom";
import { HeaderContainerstl, HeaderExternalLinkstl, LinksContainerstl, Logostl, NavBarstl, NavLinksstl, TopHeader } from "./StyleClasses";

function Header() {
  return (
    <header>
      <div className={ HeaderContainerstl }>
        <div className={TopHeader}>
          <h1 className={ Logostl }>{'{ Guilherme Oliveira }'}</h1>
          <div className={ LinksContainerstl }>
            <a className={ HeaderExternalLinkstl } target="_blank" href="https://github.com/gui-oliveira-dev">GitHub</a>
          </div>
        </div>
        <nav className={ NavBarstl }>
          <NavLink className={ NavLinksstl } to="/">Home</NavLink>
          <NavLink className={ NavLinksstl } to="projects">Projetos</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
