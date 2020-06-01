import React from 'react';
import {describe, expect, it} from '@jest/globals';
import { shallow, mount } from 'enzyme';

import Header from './Header';
import MovieDescription from './MovieDescription';
import HeaderSearch from './HeaderSearch';
import data from '../../mockadata';

describe('Render Header component with full props', () => {
  const header = shallow(<Header films={data.films} />);
  test('Should render MovieDescription component', () => {
    expect(header.find('MovieDescription')).toHaveLength(1);
  });
  test('Should not render Header component', () => {
    expect(header.find('HeaderSearch')).toHaveLength(0);
  });
});
describe('Render Header component with empty props', () => {
  const props = [];
  const header = shallow(<Header films={props} />);
  test('Should not render MovieDescription component', () => {
    expect(header.find('MovieDescription')).toHaveLength(0);
  });
  test('Should render HeaderSearch component', () => {
    expect(header.find('HeaderSearch')).toHaveLength(1);
  });
});

describe('Snapshot Header', () => {
  const header = mount(<Header films={data.films} />);
  it('renders properly', () => {
    expect(header).toMatchSnapshot()
  })
});
