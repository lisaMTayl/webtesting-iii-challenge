// Test away!
import React from 'react';
import renderer from 'react-test-renderer';  // yarn add -D react-test-renderer
import { render, fireEvent, getByText, container, act  } from '@testing-library/react'; // yarn add -D @testing-library/react
import Controls from './Controls';


// add snapshot to catch and approve changes to Controls.js
describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });


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



