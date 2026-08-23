import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export function render(url) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppRoutes />
    </MemoryRouter>
  );
  return { html };
}
