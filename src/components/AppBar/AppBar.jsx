import { NavLink } from "react-router-dom";

const navItems = [
    { href: '/', text: 'General' },
    { href: '/variables', text: 'Variables' },
  ];
  
  const AppBar = () => {
      return (
          <header>
              <ul>
                  {navItems.map(({ href, text }) => {
                      if(href.includes("/variables")) {
                          return (
                              <li key={href}>
                                  <NavLink to={href}>{text}</NavLink>
                              </li>
                          )
                      }    
  
                      return (
                          <li key={href}>
                              <NavLink to={href} end>{text}</NavLink>
                          </li>
                      )
                  })}
              </ul>
          </header>
      )
  }
  
  export default AppBar;