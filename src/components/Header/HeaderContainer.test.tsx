import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<HeaderContainer />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });
});
