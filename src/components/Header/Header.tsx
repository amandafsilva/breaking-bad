import React from 'react';
import useHeaderStyles from './Header.styles';
import { AppBarMenuItem } from './Header.types';
import BrBaLogo from '../../assets/brba-logo.svg';

interface HeaderProps {
  menuItems: Array<AppBarMenuItem>;
  selectedMenu: AppBarMenuItem;
  onMenuSelected: (menu: AppBarMenuItem) => void;
}

const Header = ({ menuItems, selectedMenu, onMenuSelected }: HeaderProps) => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.navBar}>
      <img src={BrBaLogo} alt="Breaking Bad logo" className={classes.logo} />
      <div className={classes.menu}>
        {menuItems.map((item: AppBarMenuItem, index: number) => (
          <button
            key={index}
            className={`${classes.menuButton} ${selectedMenu.label === item.label ? 'active' : ''}`}
            onClick={() => onMenuSelected(item)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
