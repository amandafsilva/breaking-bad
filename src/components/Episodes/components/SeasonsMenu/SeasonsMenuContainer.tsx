import React from 'react';
import SeasonsMenu from './SeasonsMenu';
import { toggleSeason } from '../../../../stores/Season/SeasonEvents';

const SeasonsMenuContainer = () => {
  const [selectedSeason, setSelectedSeason] = React.useState(1);

  const onSeasonSelected = (seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
    toggleSeason(seasonNumber);
  };

  return <SeasonsMenu selectedSeason={selectedSeason} onSelect={onSeasonSelected} />;
};

export default SeasonsMenuContainer;
