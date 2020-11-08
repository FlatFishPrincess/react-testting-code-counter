import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");

});

test('clocking on button increments counter display', () => {
  const wrapper = setup();
  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test('clocking on button decrements counter display', () => {
  const wrapper = setup();

  const counter = findByTestAttr(wrapper, 'count').text();

  // get button
  const button = findByTestAttr(wrapper,'decrement-button');
  button.simulate('click');

  expect(counter).toBe("0");

  // if button clicked, should decrement by 1

  // check if number is negative, if yes, display error 
});


describe('Handling error message if negative count', () => {

  test('error does not show when its not needed', () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error');
    expect(errorDiv.hasClass('error')).toBe(false);
    // if button clicked, should decrement by 1
  
    // check if number is negative, if yes, display error 
  });

  
  let wrapper;
  beforeEach(() => {
    wrapper = setup();

    // clicks button
    const dButton = findByTestAttr(wrapper, 'decrement-button');
    dButton.simulate('click');
  
  });

  test('error shows', () => {
    const errorDiv = findByTestAttr(wrapper, 'error');
    const errorHasClass = errorDiv.hasClass('error');
    expect(errorHasClass).toBe(true);
  });

  test('counter should be 0', () => {
    const count = findByTestAttr(wrapper, 'count');
    const countText = count.text();
    expect(countText).toBe("0");
  });

  test('should be 1 if increment button is clicked', () => {
    const incrementBtn = findByTestAttr(wrapper, 'increment-button');
    incrementBtn.simulate('click');
    const countDiv = findByTestAttr(wrapper, 'count').text();
    expect(countDiv).toBe("1");
  });

  test('remove error class name if increment button is clicked', () => {
    const incrementBtn = findByTestAttr(wrapper, 'increment-button');
    incrementBtn.simulate('click');

    const errorDiv = findByTestAttr(wrapper, 'error');
    console.log(errorDiv.debug());
    const errorHasClass = errorDiv.hasClass('error');
    expect(errorHasClass).toBe(false);
  });
});

/*
test('renders learn react link',  () => {
  const wrapper = shallow(<App />); // shallow function renders react component
  // console.log(wrapper.debug()); // I can see wrapper usgin debug() 
  expect(wrapper).toBeFalsy();
});
*/