import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';
import BreakingBadService from '../../../../services/BreakingBad/BreakingBadService';

jest.mock('../../../../services/BreakingBad/BreakingBadService');

describe('HomeContainer', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<HomeContainer />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });

  it('should call BreakingBadService.getRandomQuote and set result to homeQuote on mount', () => {
    // Given
    const setStateMock = jest.fn();

    jest.spyOn(React, 'useEffect').mockImplementation((callback) => callback());
    BreakingBadService.getRandomQuote = jest.fn().mockResolvedValue(homeQuoteMock);
    jest.spyOn(React, 'useState').mockImplementation(() => ['', setStateMock]);

    shallow(<HomeContainer />);

    // Then
    expect(BreakingBadService.getRandomQuote).toHaveBeenCalledTimes(1);
    // expect(setStateMock).toHaveBeenNthCalledWith(1, homeQuoteMock);
  });

  it('should render Home with the correct props', () => {
    // Given
    const setStateMock = jest.fn();

    jest.spyOn(React, 'useState').mockImplementation(() => [homeQuoteMock, setStateMock]);

    const wrapper = shallow(<HomeContainer />);

    // Then
    expect(wrapper.find('Home')).toHaveLength(1);
    expect(wrapper.find('Home').props()).toStrictEqual({
      quote: homeQuoteMock,
    });
  });
});

const homeQuoteMock = {
  text: 'I am the one who knocks.',
  author: 'Walter White',
};
