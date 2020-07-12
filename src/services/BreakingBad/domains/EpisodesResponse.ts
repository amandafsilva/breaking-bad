export interface EpisodesResponse {
  episode_id: number;
  title: string;
  season: string;
  episode: string;
  air_date: string;
  characters: Array<string>;
  series: string;
}
