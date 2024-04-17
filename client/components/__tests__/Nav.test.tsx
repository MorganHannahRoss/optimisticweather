// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'

describe('<Nav />', () => {
  it('renders all NavLinks and they are visible', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /Home/i })).toBeDefined()

    expect(screen.getByRole('link', { name: /Activities/i })).toBeDefined()

    expect(screen.getByRole('link', { name: /Events/i })).toBeDefined()

    expect(screen.getByRole('link', { name: /Clothing/i })).toBeDefined()

    expect(screen.getByRole('link', { name: /AI/i })).toBeDefined()
  })
})
