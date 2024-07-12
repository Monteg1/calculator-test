import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calc';

test('renders calculator', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('0')).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(getByText('2')).toBeInTheDocument();
});