import { render, screen } from '@testing-library/react';
import App from './App';

test('no está bien sacar esta palabra', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aplicación/i);
  expect(linkElement).toBeInTheDocument();
});
