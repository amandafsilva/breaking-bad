import React from 'react';
import EpisodesList from './EpisodesList';
import { Episode } from './EpisodesList.types';

interface EpisodesListContainerProps {
  episodes: Array<Episode>;
}

const EpisodesListContainer = ({ episodes }: EpisodesListContainerProps) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    setActiveIndex(-1);
  }, [episodes]);

  const onSelect = (selectedEpisodeIndex: number) => {
    setActiveIndex(selectedEpisodeIndex);
  };

  return (
    <EpisodesList episodes={episodes} selectedEpisodeIndex={activeIndex} onSelect={onSelect} />
  );
};

export default EpisodesListContainer;
