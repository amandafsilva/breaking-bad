import React from 'react';
import { shallow } from 'enzyme';
import CharactersRoute from './CharactersRoute';

describe('CharactersRoute', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<CharactersRoute />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });
});
