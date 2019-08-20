// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, act, findByText, getByText} from '@testing-library/react';
import Display from './Display';



// add snapshot to catch and approve changes to Display.js
describe('<Display />', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
// begin tutorial
  //check that things will be displayed properly based on the given boolean values
  it('displays open and green', () => {
    //pass a value to the variable that controls if the door is open or closed
    Display.defaultProps.closed = false
    //grab a render of the page
    const { getByText } = render(<Display />)
    //check the status of the text on the page
    const open = getByText(/open/i)
    open
    //grab the color from the page and check its status
    expect(open.className).toMatch('led green-led')
  })

  it('displays closed and red', () => {
    //pass a true so that the door is closed
    Display.defaultProps.closed = true

    const { getByText } = render(<Display />)
    //check that the page is rendered with closed
    const closed =  getByText(/closed/i)
    closed
    //grab the color and check that its red
    expect(closed.className).toMatch('led red-led')
  })

  it('displays locked and red', () => {
    //set the status of the lock to true
    Display.defaultProps.locked = true

    const { getByText } = render(<Display />)
    //check if the door is locked
    const locked = getByText(/Locked/i)
    locked
    //check if the color is red
    expect(locked.className).toMatch('led red-led')
  })

  it('displays unlocked and green', () => {
    //set false to the lock value
    Display.defaultProps.locked = false

    const { getByText } = render(<Display />)
    //check if the door is unlocked
    const unlocked = getByText(/Unlocked/i)
    unlocked
    //check if the status is green
    expect(unlocked.className).toMatch('led green-led')
  })

  // end tutorial

  // it('should be closed and unlocked by default', () => {
  //   render(<Display />);
  //   expect((/lock gate/i));
  //   expect((/open gate/i));
  // });




});