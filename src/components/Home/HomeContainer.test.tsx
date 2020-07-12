import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<HomeContainer />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });
});
