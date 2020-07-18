import React from 'react';
import { shallow } from 'enzyme';
import HomeRoute from './HomeRoute';

describe('HomeRoute', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<HomeRoute />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });

  it('should render HomeContainer', () => {
    // Given
    const wrapper = shallow(<HomeRoute />);

    // Then
    expect(wrapper.find('HomeContainer')).toHaveLength(1);
  });
});
