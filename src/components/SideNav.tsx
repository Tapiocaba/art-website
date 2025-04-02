import { NavTitle, NavSubtitle, NavTitleLink, NavHomeLink } from './nav/NavComponents';
import { ThemeToggle } from './nav/ThemeToggle';
import { useEffect, useState } from 'react';
import './SideNav.css';

const SideNav = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="side-nav">
      <div className="nav-content">
        <NavHomeLink to="/">Lisa Lin</NavHomeLink>
        <div className="nav-section">
          <div className="nav-group">
          <NavTitle>Selected Works</NavTitle>
          <NavTitle>Drawings</NavTitle>
            <NavSubtitle to="/works/drawings">
              Drawings 1
            </NavSubtitle>
          <NavTitle>Photo</NavTitle>
            <NavSubtitle to="/works/photo">
              Photo 1
            </NavSubtitle>
          <NavTitle>Installation</NavTitle>
            <NavSubtitle to="/works/installation">
              Installation 1
            </NavSubtitle>
          <NavTitle>Film</NavTitle>
            <NavSubtitle to="/works/film">
              Film
            </NavSubtitle>
        </div>

        <div className="nav-group">
          <NavTitleLink to="/about">
            About
          </NavTitleLink>
          <NavTitleLink to="/contact">
            Contact
          </NavTitleLink>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default SideNav;
