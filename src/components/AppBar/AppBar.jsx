import { NavLink } from 'react-router-dom';
import '../AppBar/AppBar.css';

const navItems = [
  { href: '/', text: 'General' },
  { href: '/variables', text: 'Variables' },
];

const AppBar = () => {
  return (
    <header className="header">
      <ul className="nav-list">
        {navItems.map(({ href, text }) => {
          if (href.includes('/variables')) {
            return (
              <li key={href} className="nav-list__item">
                <NavLink to={href} className="nav-list__link">
                  {text}
                </NavLink>
              </li>
            );
          }

          return (
            <li key={href} className="nav-list__item">
              <NavLink to={href} className="nav-list__link" end>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default AppBar;
