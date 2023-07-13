import React from 'react';
import { render, screen } from '@testing-library/react';
import Stage from './Stage';

test('renders Loader component', () => {
  render(<Stage earning={125000} isCurrent={false} isPast={false} />);
  const loaderElement = screen.getByText(/\$125,000/i);
  expect(loaderElement).toBeInTheDocument();
});
