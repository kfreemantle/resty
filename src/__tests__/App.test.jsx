import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import App from '../App';
import '@testing-library/jest-dom';


const server = setupServer(
  rest.get('https://test.com', (req, res, ctx) => {
    return res(ctx.json({ message: 'Test data' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Updates on form submit and displays API results', async () => {
  render(<App />);
  const urlInput = screen.getByLabelText(/URL:/i);
  const methodSelect = screen.getByLabelText(/Method:/i);
  const goButton = screen.getByText(/Go/i);

  userEvent.type(urlInput, 'https://test.com');
  userEvent.selectOptions(methodSelect, ['GET']);
  userEvent.click(goButton);

  // Wait for results to be displayed
  const results = await screen.findByText(/Test data/i);

  expect(results).toBeInTheDocument();
});
