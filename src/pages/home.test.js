// import { render, screen } from '@testing-library/react';
// import Home from './Home';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'
import { BASE_APPLE_API_URL } from '../constants/api-constants'
import { HOME_TEST_DATA } from './home-test-data';

const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
    rest.get(BASE_APPLE_API_URL + 'searchTerm', (req, res, ctx) => {
    return res(ctx.json(HOME_TEST_DATA))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays home', async () => {
  render(<Home />)

  expect(screen.getByRole('div')).toHaveTextContent('A')
  expect(screen.getByRole('div')).toHaveTextContent('B')
})

test('calls api', async () => {
  render(<Home />)

  fireEvent.input
//   fireEvent.click(screen.getByText('Load Greeting'))
  fireEvent.click(screen.getByDisplayValue('Search'))

  await waitFor(() => screen.getByRole('div'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Home />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})