import GameCardsList from './GameCardsList'
import { render } from '@testing-library/react'

describe('GameCardsList', () => {
  
    const savedGameProfiles = [
        {
          location: 'Horner Racecourse',
          date: '11/04/2020',
          players: 'John, Jane',
          winner: 'Jane',
          shots: '89',
        },
        {
          location: 'City Park',
          date: '11/13/2020',
          players: 'Fritz, Hanni, Nanni',
          winner: 'Fritz',
          shots: '35',
        },
      ]
  
  
    it('renders correctly', () => {
        const { container, getByText } = render(<GameCardsList savedGameProfiles={savedGameProfiles}/>)
        
        expect(container.firstChild).toMatchSnapshot()

        expect(getByText('Horner Racecourse')).toBeInTheDocument()
        expect(getByText('11/04/2020')).toBeInTheDocument()
        expect(getByText('John, Jane')).toBeInTheDocument()
        expect(getByText('Jane')).toBeInTheDocument()
        expect(getByText('89')).toBeInTheDocument()

        expect(getByText('City Park')).toBeInTheDocument()
        expect(getByText('11/13/2020')).toBeInTheDocument()
        expect(getByText('Fritz, Hanni, Nanni')).toBeInTheDocument()
        expect(getByText('Fritz')).toBeInTheDocument()
        expect(getByText('35')).toBeInTheDocument()

    })

})