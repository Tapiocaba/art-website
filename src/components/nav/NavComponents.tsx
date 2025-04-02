import { Link } from 'react-router-dom';
import './NavComponents.css';

interface NavItemProps {
  children: React.ReactNode;
}

interface NavLinkProps extends NavItemProps {
  to: string;
}

export const NavTitle = ({ children }: NavItemProps) => (
  <h3 className="nav-title">{children}</h3>
);

export const NavSubtitle = ({ children, to }: NavLinkProps) => (
  <Link to={to} className="nav-subtitle">
    {children}
  </Link>
);

export const NavTitleLink = ({ children, to }: NavLinkProps) => (
  <Link to={to} className="nav-title nav-title-link">
    {children}
  </Link>
);

export const NavHomeLink = ({ children, to }: NavLinkProps) => (
  <Link to={to} className="nav-home-link">
    {children}
  </Link>
);