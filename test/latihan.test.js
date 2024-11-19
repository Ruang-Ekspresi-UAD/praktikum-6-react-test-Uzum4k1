import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';

describe('Latihan React Testing', () => {
  // 1. Counter Default Value must be 0
  it('Counter default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue.textContent).toBe('0');
  });

  // 2. Increment works when button clicked
  it('Increment works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');

    fireEvent.click(incrementButton);
    expect(counterValue.textContent).toBe('1');
  });

  // 3. Decrement works when button clicked
  it('Decrement works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    fireEvent.click(decrementButton);
    expect(counterValue.textContent).toBe('-1');
  });

  // 4. Reset the count using reset button
  it('Reset the count using reset button', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); // Counter = 2
    fireEvent.click(resetButton);
    expect(counterValue.textContent).toBe('0');
  });

  // 5. Greeting Component {nama kalian}
  it('Greeting component displays name (Your Name)', () => {
    render(<Greeting name="John Doe" />);
    const greetingElement = screen.getByTestId('greeting');
    expect(greetingElement.textContent).toBe('Hello, John Doe');
  });

  // 6. Greeting Component {nama dosen kalian}
  it('Greeting component displays name (Dosen)', () => {
    render(<Greeting name="Dr. Smith" />);
    const greetingElement = screen.getByTestId('greeting');
    expect(greetingElement.textContent).toBe('Hello, Dr. Smith');
  });

  // 7. Triggers alert with correct message when clicked
  it('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); // Mock alert function

    render(<AlertButton message="This is a test alert" />);
    const alertButton = screen.getByTestId('alert-button');

    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('This is a test alert');
  });
});
