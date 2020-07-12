import React from 'react';
import useSeasonsMenuStyles from './SeasonsMenu.styles';
import { Menu } from 'semantic-ui-react';

interface SeasonsMenuProps {
  selectedSeason: number;
  onSelect: (seasonNumber: number) => void;
}

const SeasonsMenu = ({ selectedSeason, onSelect }: SeasonsMenuProps) => {
  const classes = useSeasonsMenuStyles();

  return (
    <Menu fluid vertical tabular className={classes.menu}>
      <Menu.Item
        name="Season 1"
        active={selectedSeason === 1}
        onClick={() => onSelect(1)}
        className={classes.menuItem}
      />
      <Menu.Item
        name="Season 2"
        active={selectedSeason === 2}
        onClick={() => onSelect(2)}
        className={classes.menuItem}
      />
      <Menu.Item
        name="Season 3"
        active={selectedSeason === 3}
        onClick={() => onSelect(3)}
        className={classes.menuItem}
      />
      <Menu.Item
        name="Season 4"
        active={selectedSeason === 4}
        onClick={() => onSelect(4)}
        className={classes.menuItem}
      />
      <Menu.Item
        name="Season 5"
        active={selectedSeason === 5}
        onClick={() => onSelect(5)}
        className={classes.menuItem}
      />
    </Menu>
  );
};

export default SeasonsMenu;
