import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loader component', () => {
  render(<App />);
  const loaderElement = screen.getByText(/loading/i);
  expect(loaderElement).toBeInTheDocument();
});
