import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { describe, expect, it } from '@jest/globals';
import renderer from 'react-test-renderer';

import EmptyContent from './EmptyContent';
import { WithoutContent } from './EmptyContent';
const props = { title: 'No films found' };

const emptyContent = mount(<EmptyContent {...props} />);

describe('Render EmptyContent', () => {
  test('EmptyContent should contains text', () => {
    expect(enzymeFind(emptyContent, WithoutContent).text()).toBe(
      'No films found',
    );
  });
  test('EmptyContent should has length 1', () => {
    expect(enzymeFind(emptyContent, WithoutContent)).toHaveLength(1);
  });
});

describe('Snapshot EmptyContent', () => {
  const emptyContent = renderer.create(<EmptyContent />).toJSON;
  it('renders properly', () => {
    expect(emptyContent).toMatchSnapshot();
  });
});
