import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<App />);

    // Then
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render AppRouter', () => {
    // Given
    const wrapper = shallow(<App />);

    // Then
    expect(wrapper.find('AppRouter')).toHaveLength(1);
  });
});
