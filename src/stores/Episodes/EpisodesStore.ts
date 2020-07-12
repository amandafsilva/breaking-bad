import { seasonStore } from './../Season/SeasonStore';
import { createStore, combine } from 'effector';
import { EpisodesState } from './EpisodesState';
import { loadEpisodes, loadEpisodesDone } from './EpisodesEvents';
import { cloneDeep } from 'lodash';
import { Episode } from '../../components/Episodes/components/EpisodesList/EpisodesList.types';
import { SeasonState } from '../Season/SeasonState';

const initialState: EpisodesState = {
  loading: false,
  episodes: [],
};

const onLoadEpisodes = (state: EpisodesState) => cloneDeep({ ...state, loading: true });

const onLoadEpisodesDone = (state: EpisodesState, episodes: Array<Episode>) =>
  cloneDeep({ ...state, loading: false, episodes });

export const episodesStore = createStore(initialState)
  .on(loadEpisodes, onLoadEpisodes)
  .on(loadEpisodesDone, onLoadEpisodesDone);

export const filteredEpisodesStore = combine(
  episodesStore,
  seasonStore,
  ({ loading, episodes }: EpisodesState, seasons: Array<SeasonState>) => {
    const selectedSeason = seasons.find((season: SeasonState) => season.selected) || seasons[0];

    return {
      loading: loading,
      episodes: episodes.filter(
        (episode: Episode) => Number(episode.season) === selectedSeason.seasonNumber
      ),
    };
  }
);
