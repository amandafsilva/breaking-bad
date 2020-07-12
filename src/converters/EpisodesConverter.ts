import { EpisodesResponse } from '../services/BreakingBad/domains/EpisodesResponse';
import { Episode } from '../components/Episodes/components/EpisodesList/EpisodesList.types';

const convert = (episodes: Array<EpisodesResponse>): Array<Episode> =>
  episodes.map(({ episode_id, title, season, episode, air_date, characters }) => ({
    id: episode_id,
    title,
    season: `0${season}`,
    episode: Number(episode) < 10 ? `0${episode}` : episode,
    airDate: air_date,
    characters,
  }));

const EpisodesConverter = {
  convert,
};

export default EpisodesConverter;
