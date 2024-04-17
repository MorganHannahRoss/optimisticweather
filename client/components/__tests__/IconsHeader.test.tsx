// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import IconsHeader from '../Header/IconsHeader'

const queryClient = new QueryClient()

describe('renders IconsHeader component', () => {
  it('renders loading', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <IconsHeader />
      </QueryClientProvider>,
    )

    const loading = screen.getByText(/...Loading/)
    expect(loading).toBeDefined()
    expect(loading.tagName).toBe('P')
  })
})
