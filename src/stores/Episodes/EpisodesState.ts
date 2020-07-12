import { Episode } from '../../components/Episodes/components/EpisodesList/EpisodesList.types';

export interface EpisodesState {
  loading: boolean;
  episodes: Array<Episode>;
}
