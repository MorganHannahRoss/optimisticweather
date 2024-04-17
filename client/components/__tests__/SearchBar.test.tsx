// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchBar from '../Header/SearchBar'

vi.mock('../../hooks/useLocations', () => ({
  useLocations: () => ({
    data: [{ id: 1, city: 'Welly', lat: '123', lon: '456' }],
    isPending: false,
    isError: false,
    error: null,
  }),
}))

const queryClient = new QueryClient()

describe('<SearchBar />', () => {
  it('renders a search box', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchBar
          location={{ id: 1, city: 'Welly', lat: '123', lon: '456' }}
          setLocation={() => {}}
        />
      </QueryClientProvider>,
    )
    const combobox = screen.getByRole('combobox')
    expect(combobox).toBeDefined()
  })
})
