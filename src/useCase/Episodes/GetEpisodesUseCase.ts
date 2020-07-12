import BreakingBadService from '../../services/BreakingBad/BreakingBadService';
import { loadEpisodes, loadEpisodesDone } from './../../stores/Episodes/EpisodesEvents';

const GetEpisodesUseCase = async () => {
  loadEpisodes();

  try {
    const episodes = await BreakingBadService.getEpisodes();
    loadEpisodesDone(episodes);
  } catch (error) {
    return console.log(error);
  }
};

export default GetEpisodesUseCase;
