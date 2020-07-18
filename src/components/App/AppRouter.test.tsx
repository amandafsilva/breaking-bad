import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';
import EpisodesRoute from '../Episodes/EpisodesRoute';
import HomeRoute from '../Home/HomeRoute';
import CharactersRoute from '../Characters/CharactersRoute';

describe('AppRouter', () => {
  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<AppRouter />);

    // Then
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the correct routes', () => {
    // Given
    const wrapper = shallow(<AppRouter />);
    const expectedRoutes = [
      {
        path: '/',
        exact: true,
        component: HomeRoute,
      },
      {
        path: '/episodes',
        component: EpisodesRoute,
      },
      {
        path: '/characters',
        component: CharactersRoute,
      },
    ];

    // Then
    expect(wrapper.find('BrowserRouter')).toHaveLength(1);
    expect(wrapper.find('Switch')).toHaveLength(1);

    const routeWrapper = wrapper.find('Route');
    expect(routeWrapper).toHaveLength(expectedRoutes.length);
    routeWrapper.forEach((route, index) => {
      expect(route.props()).toStrictEqual(expectedRoutes[index]);
    });
  });
});
