// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, act, findByText, getByText} from '@testing-library/react';
import Display from './Display';
import Controls from "../controls/Controls";


// add snapshot to catch and approve changes to Display.js
describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be closed and unlocked by default', () => {
    render(<Display />);
    expect((/lock gate/i));
    expect((/open gate/i));
  });

  it('should be closed and unlocked by default', () => {
    render(<Display />);
    expect((/lock gate/i));
    expect((/open gate/i));
  });


});