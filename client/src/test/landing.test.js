import { render, screen } from '@testing-library/react';
import Landing from '../views/landing/Landing';

describe('Landing', () => {
  test('renders welcome message', () => {
    render(<Landing />);
    const welcomeMessage = screen.getByText(/¡Bienvenido al mundo de la Fórmula 1/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders enter button', () => {
    render(<Landing />);
    const enterButton = screen.getByRole('button', { name: /entrar/i });
    expect(enterButton).toBeInTheDocument();
  });
});