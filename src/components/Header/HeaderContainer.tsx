import React from 'react';
import Header from './Header';
import { AppBarMenuItem } from './Header.types';

const HeaderContainer = () => {
  const [selectedMenu, setSelectedMenu] = React.useState(menuItems[0]);

  const onMenuSelected = (selectedMenu: AppBarMenuItem) => {
    setSelectedMenu(selectedMenu);
  };

  return (
    <Header menuItems={menuItems} selectedMenu={selectedMenu} onMenuSelected={onMenuSelected} />
  );
};

const menuItems: Array<AppBarMenuItem> = [
  { link: '/', label: 'Home' },
  { link: '/', label: 'Episodes' },
  { link: '/', label: 'Characters' },
  { link: '/quotes', label: 'Quotes' },
];

export default HeaderContainer;
