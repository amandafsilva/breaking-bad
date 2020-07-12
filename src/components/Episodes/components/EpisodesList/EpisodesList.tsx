import React from 'react';
import { Episode } from './EpisodesList.types';
import { Accordion, Icon, Menu, AccordionTitleProps } from 'semantic-ui-react';
import useEpisodesStyles from './EpisodesList.styles';
import { format } from 'date-fns';

interface EpisodesProps {
  episodes: Array<Episode>;
  selectedEpisodeIndex: number;
  onSelect: (selectedEpisodeIndex: number) => void;
}

const EpisodesList = ({ episodes, selectedEpisodeIndex, onSelect }: EpisodesProps) => {
  const classes = useEpisodesStyles();

  const handleClick = (event: React.MouseEvent, titleProps: AccordionTitleProps) => {
    const { index } = titleProps;

    if (index !== undefined) {
      const newIndex = selectedEpisodeIndex === index ? -1 : Number(index);
      onSelect(newIndex);
    }
  };

  return (
    <Accordion fluid as={Menu} vertical styled className={classes.content}>
      {episodes.map(({ title, season, episode, airDate, characters }, index) => (
        <Menu.Item key={index} className="menuItem">
          <Accordion.Title
            active={selectedEpisodeIndex === index}
            index={index}
            onClick={handleClick}
          >
            {episode} - {title}
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content active={selectedEpisodeIndex === index}>
            <p>
              <strong>Air date:</strong> {format(new Date(airDate), 'dd MMM yyyy')}
            </p>
            <p>
              <strong>Characters:</strong> {characters.join(', ')}
            </p>
          </Accordion.Content>
        </Menu.Item>
      ))}
    </Accordion>
  );
};

export default EpisodesList;
