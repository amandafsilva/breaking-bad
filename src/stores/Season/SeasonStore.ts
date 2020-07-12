import { toggleSeason } from './SeasonEvents';
import { createStore } from 'effector';
import { SeasonState } from './SeasonState';

const initialState: Array<SeasonState> = [
  { seasonNumber: 1, selected: true },
  { seasonNumber: 2, selected: false },
  { seasonNumber: 3, selected: false },
  { seasonNumber: 4, selected: false },
  { seasonNumber: 5, selected: false },
];

const onToggleSeason = (state: Array<SeasonState>, selectedSeason: number) =>
  state.map((seasonItem: SeasonState) => {
    return seasonItem.seasonNumber === selectedSeason
      ? {
          ...seasonItem,
          selected: true,
        }
      : {
          ...seasonItem,
          selected: false,
        };
  });

export const seasonStore = createStore(initialState).on(toggleSeason, onToggleSeason);

export default seasonStore;
