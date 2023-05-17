import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('Updates on form submit and displays requestParams', async () => {
  const { getByText, getByLabelText } = render(<App />);

  const urlInput = getByLabelText('URL:');
  const goButton = getByText('GO!');

  fireEvent.change(urlInput, { target: { value: 'https://test.com' } });
  fireEvent.click(getByText('POST'));

  fireEvent.click(goButton);

  const requestMethod = await getByText('Request Method: POST');
  const requestUrl = await getByText('URL: https://test.com');

  expect(requestMethod).toBeInTheDocument();
  expect(requestUrl).toBeInTheDocument();
});
