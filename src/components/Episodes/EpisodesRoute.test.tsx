import React from 'react';
import { shallow } from 'enzyme';
import EpisodesRoute from './EpisodesRoute';
import GetEpisodesUseCase from '../../useCase/Episodes/GetEpisodesUseCase';
import * as effector from 'effector-react';

jest.mock('../../useCase/Episodes/GetEpisodesUseCase');

describe('EpisodesRoute', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<EpisodesRoute />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });

  it('should call GetEpisodesUseCase on mount', () => {
    // Given
    jest.spyOn(React, 'useEffect').mockImplementation((callback) => callback());

    shallow(<EpisodesRoute />);

    // Then
    expect(GetEpisodesUseCase).toHaveBeenCalledTimes(1);
  });

  it('should render SeasonsMenuContainer', () => {
    // Given
    jest.spyOn(effector, 'useStore').mockReturnValue(stateMock);

    const wrapper = shallow(<EpisodesRoute />);

    // Then
    expect(wrapper.find('SeasonsMenuContainer')).toHaveLength(1);
  });

  it('should render EpisodesListContainer with the correct props', () => {
    // Given
    jest.spyOn(effector, 'useStore').mockReturnValue(stateMock);

    const wrapper = shallow(<EpisodesRoute />);

    // Then
    expect(wrapper.find('EpisodesListContainer')).toHaveLength(1);
    expect(wrapper.find('EpisodesListContainer').props()).toStrictEqual({
      episodes: stateMock.episodes,
    });
  });
});

const stateMock = {
  episodes: [
    {
      id: 1,
      title: 'Pilot',
      season: '1',
      episode: '1',
      airDate: '2008-01-20',
      characters: [],
    },
    {
      id: 2,
      title: "Cat's in the bag...",
      season: '1',
      episode: '2',
      airDate: '2008-01-27',
      characters: [],
    },
  ],
};
