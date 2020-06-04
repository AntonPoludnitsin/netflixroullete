import React from 'react';

import { mount } from 'enzyme';
import { describe, expect, it } from '@jest/globals';
import { enzymeFind } from 'styled-components/test-utils';

import SortingCount from './SortingCount';
import { SortCount } from './SortingCount';

const props = [
  {
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Science Fiction'],
    runtime: null,
  },
  {
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Science Fiction'],
    runtime: null,
  },
];

describe('Render SortingCount component', () => {
  const sortingCount = mount(<SortingCount count={props.length} />);
  test('toRenderText', () => {
    expect(enzymeFind(sortingCount, SortCount).text()).toBe('2 movie found');
  });
  test('toHaveCount', () => {
    expect(enzymeFind(sortingCount, SortCount)).toHaveLength(1);
  });
});
describe('Snapshot SortingCount', () => {
  const sortingCount = mount(<SortingCount count={props.length} />);
  it('renders properly', () => {
    expect(sortingCount).toMatchSnapshot();
  });
});
