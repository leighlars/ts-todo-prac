import React from 'react'
import {Header} from './Header'
import {screen, fireEvent, render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('Header', () => {
  
  it('should display a header', () => {
    render(<MemoryRouter><Header/></MemoryRouter>)
    const header = screen.getByRole('heading', {name: 'Vacation Checklist'})
    expect(header).toBeInTheDocument()
  })
})