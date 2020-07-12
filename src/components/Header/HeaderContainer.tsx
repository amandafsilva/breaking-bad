import React from 'react';
import Header from './Header';
import { AppBarMenuItem } from './Header.types';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const HeaderContainer = ({ history, location }: RouteComponentProps) => {
  const [selectedMenu, setSelectedMenu] = React.useState<AppBarMenuItem | null>(null);

  React.useEffect(() => {
    const currentMenu =
      menuItems.find((menuItem) => menuItem.link === location.pathname) || menuItems[0];
    setSelectedMenu(currentMenu);
  }, [location]);

  const onMenuSelected = (selectedMenu: AppBarMenuItem) => {
    setSelectedMenu(selectedMenu);
    history.push(selectedMenu.link);
  };

  return (
    selectedMenu && (
      <Header menuItems={menuItems} selectedMenu={selectedMenu} onMenuSelected={onMenuSelected} />
    )
  );
};

const menuItems: Array<AppBarMenuItem> = [
  { link: '/', label: 'Home' },
  { link: '/episodes', label: 'Episodes' },
  { link: '/characters', label: 'Characters' },
];

export default withRouter(HeaderContainer);
