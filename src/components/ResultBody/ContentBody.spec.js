import React from 'react';
import { mount } from 'enzyme';
import {describe, expect, it, test} from '@jest/globals';
import { enzymeFind } from 'styled-components/test-utils';

import EmptyContent from './EmptyContent';
import ContentBody from './ContentBody';
import FilmItem from './FilmItem';
import { FilmListContent } from './ContentBody';
import data from '../../mockadata';
import Header from "../Header/Header";

describe('Отрисовываем страницу с контентом', () => {
  describe('Ищем с просами', () => {
    const contentBody = mount(<ContentBody films={data.films} />);

    test('toHaveText', () => {
      expect(
        enzymeFind(contentBody, FilmListContent).find('FilmItem'),
      ).toHaveLength(data.films.length);
    });
  });

  const films = [];
  const contentBody = mount(<ContentBody films={films} />);

  describe('Ищем без пропсов', () => {
    test('toHaveText', () => {
      expect(
        enzymeFind(contentBody, FilmListContent).find('FilmItem'),
      ).toHaveLength(0);
    });
  });

  describe('Должен отрисоваться <EmptyContent />', () => {
    test('Должен появиться EmptyContent', () => {
      expect(contentBody.find('EmptyContent')).toHaveLength(1);
    });
  });
});

describe('Snapshot ContentBody', () => {
  const contentBody = mount(<ContentBody films={data.films} />);
  it('renders properly', () => {
    expect(contentBody).toMatchSnapshot()
  })
});
