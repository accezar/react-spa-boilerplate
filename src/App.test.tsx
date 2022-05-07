import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Bem Vindo!/i);
  expect(welcomeText).toBeInTheDocument();
});
