import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react lik', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aplicación/i);
  expect(linkElement).toBeInTheDocument();
});
