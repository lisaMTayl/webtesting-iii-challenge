// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';



// add snapshot to catch and approve changes to Dashboard.js
describe('<Dashboard />', () => {
  it('should display', () => {
    let load = render(<Dashboard/>)

  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });


  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})