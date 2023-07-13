import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loader component', () => {
  render(<App />);
  const loaderElement = screen.getByText(/Who wants to be a millionaire/i);
  expect(loaderElement).toBeInTheDocument();
});
