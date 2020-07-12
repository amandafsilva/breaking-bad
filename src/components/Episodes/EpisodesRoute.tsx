import React from 'react';
import GetEpisodesUseCase from '../../useCase/Episodes/GetEpisodesUseCase';
import EpisodesListContainer from './components/EpisodesList/EpisodesListContainer';
import { useStore } from 'effector-react';
import { filteredEpisodesStore } from '../../stores/Episodes/EpisodesStore';
import SeasonsMenuContainer from './components/SeasonsMenu/SeasonsMenuContainer';
import useEpisodesRouteStyles from './EpisodesRoute.styles';
import { Grid, Segment } from 'semantic-ui-react';

const EpisodesRoute = () => {
  const { episodes } = useStore(filteredEpisodesStore);
  const classes = useEpisodesRouteStyles();

  React.useEffect(() => {
    GetEpisodesUseCase();
  }, []);

  return (
    episodes && (
      <Grid columns={2} padded className={classes.content}>
        <Grid.Column width={4}>
          <SeasonsMenuContainer />
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment inverted className={classes.episodesListContent}>
            <EpisodesListContainer episodes={episodes} />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  );
};

export default EpisodesRoute;
