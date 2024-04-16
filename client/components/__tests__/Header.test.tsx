// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '../Header/Header'

const queryClient = new QueryClient()

describe('<Header />', () => {
  it('renders an h1 tag with "Optimistic Weather" text', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Header location={{}} setLocation={() => {}} />
      </QueryClientProvider>,
    )

    const h1 = screen.getByText(/Optimistic Weather/)
    expect(h1).toBeDefined()
    expect(h1.tagName).toBe('H1')
    expect(h1.textContent).toBe('☀️ Optimistic Weather')
  })
})
