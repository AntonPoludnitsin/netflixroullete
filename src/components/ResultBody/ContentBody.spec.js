import React from 'react';
import { mount } from 'enzyme';
import { describe, expect, it, test } from '@jest/globals';
import { enzymeFind } from 'styled-components/test-utils';

import EmptyContent from './EmptyContent';
import ContentBody from './ContentBody';
import FilmItem from './FilmItem';
import { FilmListContent } from './ContentBody';
import data from '../../mockadata';
const films = [];

describe('Render ContentBody component with full props', () => {
  const contentBody = mount(<ContentBody films={data.films} />);
  test('FilmListContent should contains FilmItem components', () => {
    expect(
      enzymeFind(contentBody, FilmListContent).find('FilmItem'),
    ).toHaveLength(data.films.length);
  });
  test('EmptyContent should not render', () => {
    expect(contentBody.find('EmptyContent')).toHaveLength(0);
  });
});

describe('Render ContentBody component without props', () => {
  const contentBody = mount(<ContentBody films={films} />);
  test('FilmListContent should not contains FilmItem components', () => {
    expect(
      enzymeFind(contentBody, FilmListContent).find('FilmItem'),
    ).toHaveLength(0);
  });
  test('EmptyContent should render ', () => {
    expect(contentBody.find('EmptyContent')).toHaveLength(1);
  });
});

describe('Snapshot ContentBody', () => {
  const contentBody = mount(<ContentBody films={data.films} />);
  it('renders properly', () => {
    expect(contentBody).toMatchSnapshot();
  });
});
