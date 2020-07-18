import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<Header {...mockProps} />);

    // Then
    expect(wrapper.exists()).toBe(true);
  });
});

const onMenuSelectedMock = jest.fn();

const mockProps = {
  selectedMenu: { link: '/', label: 'Home' },
  menuItems: [
    { link: '/', label: 'Home' },
    { link: '/example-route', label: 'Example' },
  ],
  onMenuSelected: onMenuSelectedMock,
};
