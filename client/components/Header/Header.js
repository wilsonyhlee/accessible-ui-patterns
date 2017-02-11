import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    const { active } = this.props;
    const tabs = [
      {name: 'Home', link: '/'},
      {name: 'Recommendations', link: '/recommendations'}
    ];

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Accessible UI for Color-Blind Users</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {tabs.map((t, i) => {
                return (
                  <li key={i} className={t.name === active ? 'active' : ''}>
                    <Link to={t.link}>
                      {t.name}
                    </Link>
                  </li>
                )
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
