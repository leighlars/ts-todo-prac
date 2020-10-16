import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {Card} from './Card'
import {MemoryRouter} from 'react-router-dom'

describe('Card', () => {


  it('should render a title, header, and complete button', () => {
      render(
        <MemoryRouter>
          <Card 
            name={'Walk Dog'} 
            id={1}
            desc={'Go to Panorama Park'} 
          />
        </MemoryRouter>
      )

      const cardHdr = screen.getByRole('heading', {name: 'Walk Dog'})
      const cardDesc = screen.getByText('Go to Panorama Park')
      const button = screen.getByRole('button', {name: 'Complete'})

      expect(cardHdr).toBeInTheDocument()
      expect(cardDesc).toBeInTheDocument()
      expect(button).toBeInTheDocument()
  })

  it('should change button text when button clicked', () => {
    render(
        <MemoryRouter>
          <Card 
            name={'Walk Dog'} 
            id={1}
            desc={'Go to Panorama Park'} 
          />
        </MemoryRouter>
      )
      const button = screen.getByRole('button', {name: 'Complete'})
      expect(button).toBeInTheDocument()
      fireEvent.click(button)
      const changedButton = screen.getByRole('button', {name: 'Done!'})
      expect(changedButton).toBeInTheDocument()
  })


})
