import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header__wrapper">
        <span role="img" aria-label="ghost" className="header__emoji">
          👻
        </span>
        <h1 className="header__title">
          emoji eats
          <div className="header__subtitle">fresh seasonal emojis</div>
        </h1>
      </div>
    );
  }
}

export default Header;
