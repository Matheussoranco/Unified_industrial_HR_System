import { render, screen } from '@testing-library/react';
import HealthTracker from './HealthTracker';

test('renders health metrics title', () => {
  render(<HealthTracker />);
  expect(screen.getByText(/Métricas de Saúde|Health Metrics/i)).toBeInTheDocument();
});
