import React from 'react';
import { fireEvent, screen, render, waitForElement } from '@testing-library/react';
import App from './App';

test('renders without chashing', async () => {
  const {findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

test('home works as expected', async () => {
  const {container} = render(<App />)
  const gifLink = await waitForElement(() => container.querySelector('.Gif-link'))
  expect(gifLink).toBeVisible()
})

test('search form could be used', async () => {
  render(<App />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'matrix' } })
  fireEvent.click(screen.getByRole('button'))
  const title = await screen.findByText('matrix')
  expect(title).toBeVisible()
})