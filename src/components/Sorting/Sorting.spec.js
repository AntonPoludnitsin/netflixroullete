import React from 'react';
import {describe, expect, it} from '@jest/globals';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Sorting from './Sorting';
import { SortingContent } from './Sorting';
import SortingCount from './SortingCount';
import SortingGenre from './SortingGenre';
import data from '../../mockadata';

describe('Render Sorting component with full props', () => {
  const sorting = mount(<Sorting films={data.films} />);
  test('SortingCount component to be defined', () => {
    expect(
      enzymeFind(sorting, SortingContent).find('SortingCount'),
    ).toBeDefined();
  });
  test('Should render SortingContent component', () => {
    expect(enzymeFind(sorting, SortingContent)).toHaveLength(1);
  });
  test('Should not render SortingGenre component', () => {
    expect(
      enzymeFind(sorting, SortingContent).find('SortingGenre'),
    ).toHaveLength(0);
  });
});

describe('Render Sorting component with empty props', () => {
  const wrapper = mount(<Sorting films={[]} />);
  test('Should render SortingGenre component', () => {
    expect(
      enzymeFind(wrapper, SortingContent).find('SortingGenre'),
    ).toHaveLength(1);
  });
  test('Should not render SortingCount component', () => {
    expect(
      enzymeFind(wrapper, SortingContent).find('SortingCount'),
    ).toHaveLength(0);
  });
});

describe('Snapshot Sorting', () => {
  const sorting = mount(<Sorting films={data.films} />);
  it('renders properly', () => {
    expect(sorting).toMatchSnapshot()
  })
});
