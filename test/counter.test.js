import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './latihan'; // Asumsi komponen Counter berada di file latihan.js

describe('Counter Component Tests', () => {
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

  // 4. Display has correct value (display.js)
  it('Display shows the correct value', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');

    // Increment value
    fireEvent.click(incrementButton);
    expect(counterValue.textContent).toBe('1');
    
    // Decrement value
    fireEvent.click(decrementButton);
    expect(counterValue.textContent).toBe('0');
  });
});
