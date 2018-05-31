import React from 'react';
import Main from '.';
import renderer from 'react-test-renderer';

it('displays the message', () => {
  const tree = renderer
    .create(<Main message="Hello World!" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});