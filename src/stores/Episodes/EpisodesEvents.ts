import { createEvent } from 'effector';
import { Episode } from '../../components/Episodes/components/EpisodesList/EpisodesList.types';

export const loadEpisodes = createEvent('loadEpisodes');
export const loadEpisodesDone = createEvent<Array<Episode>>('loadEpisodesDone');
