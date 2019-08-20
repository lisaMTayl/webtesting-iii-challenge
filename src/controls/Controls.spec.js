// Test away!
import React from 'react';
import renderer from 'react-test-renderer';  // yarn add -D react-test-renderer
import { render, fireEvent, getByText, container, act  } from '@testing-library/react'; // yarn add -D @testing-library/react
import Controls from './Controls';


// add snapshot to catch and approve changes to Controls.js
describe('<Controls />', () => {

  it('should display', () => {
    let load = render(<Dashboard/>)

  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // begin tutorial
  //display
  it('should render lock and close as default', () =>{
    const { getByText } = render(<Controls/>)

    //render the page and look for the text
    getByText(/lock/i) //<-- i allows for the case sensitivity to be disabled
    getByText(/close/i)
  })

  //close gate
  it('closes the gate', () => {
    //create a spy with jest
    const spy = jest.fn()
    //render the component
    const {getByText}= render(<Controls locked = {false} closed = {false} toggleClosed = {spy}/>) //this is also the default status so not necessary
    //grab the button
    const button = getByText(/close/i)
    //fire the click event for the button
    fireEvent.click(button)
    //check if the spy was called when toggleClosed was pressed
    expect(spy).toBeCalled()
  })

  it('checks if the close btn is disabled', () => {
    //create a render with the door closed and locked
    const {getByText} = render(<Controls locked = {true} closed = {true} />)
    //create a constant for the button
    const closed = getByText(/open/i)
    //and make sure the door cant open
    expect(closed.disabled).toBe(true)
  })

  //lock gate
  it('locks the gate', () => {
    //render the component
    const {getByText, findByText}= render(<Controls locked = {false} closed = {true}/>)
    //grab the button
    const button = getByText(/lock/i)
    //fire the click event for the button using act to start the async process
    act( () => {
      fireEvent.click(button)
    })
    //waits for the page to load
    findByText(/unlock/i)
  })

  it('checks if the lock btn is disabled', () => {
    //create a render where the door is open and unlocked
    const {getByText} = render(<Controls locked = {false} closed = {false} />)
    //grab the button with the render
    const locked = getByText(/lock/i)
    //check to make sure the lock button is disabled
    expect(locked.disabled).toBe(true)
  })

  // end tutorial

  // initial state gate should be unlocked and open
  it('should be closed and unlocked by default', () => {
    render(<Controls />);
    expect((/lock gate/i));
    expect((/close gate/i));
  });

  it('Should see open gate and lock buttons when gate is currently closed and unlocked', () => {
    const { getByText } = render(<Controls locked={ false } closed={ true }/>);
    const button = getByText(/open gate/i);
    act(() => {fireEvent.click(button)});
      expect(getByText(/open gate/i));
      expect(getByText(/lock gate/i))
    })
    });



  // it('Lock button should be enabled when gate is open', () => {
  //   const { getByText } = render(<Controls locked={ false } closed={ false }/>);
  //   expect(getByText(/lock gate/i));
  //   expect(getByText(/close gate/i));
  // });

  // it('Lock button should be enabled when gate is open', () => {
  //   const { getByText } = render(<Controls locked={ true } closed={ true }/>);
  //   fireEvent.click(getByText(/open gate/i));
  //   expect(getByText(/unlock gate/i));
  //   expect(getByText(/open gate/i));
  // });

// it('unlock gate', () => {
//   const { getByText } = render(<Controls/>);
//   expect(Controls.props.locked = false);
// })

  // it('Lock button should be enabled when gate is open', () => {
  //   const { getByText } = render(<Controls locked={ true } closed={ false }/>);
  //   fireEvent.click(getByText(/open gate/i));
  //   expect(getByText(/unlock gate/i));
  //   expect(getByText(/close gate/i));
  // });



