import GameCardsList from './GameCardsList'
import { render } from '@testing-library/react'

describe('GameCardsList', () => {
  
    const savedGameProfiles = [
        {
          location: 'Horner Racecourse',
          date: '2020-12-24',
          players: 'John, Jane',
          winner: 'Jane',
          shots: '89',
          _id: '1',
        },
        {
          location: 'City Park',
          date: '2020-01-01',
          players: 'Fritz, Hanni, Nanni',
          winner: 'Fritz',
          shots: '35',
          _id: '2',
        },
      ]
  
    it('renders correctly', () => {
        const onDeleteMock = jest.fn()
        const { container, getByText, getAllByRole } = render(<GameCardsList savedGameProfiles={savedGameProfiles} onDelete={onDeleteMock}/>)
        
        expect(container.firstChild).toMatchSnapshot()

        expect(getByText('Horner Racecourse')).toBeInTheDocument()
        expect(getByText('2020-12-24')).toBeInTheDocument()
        expect(getByText('John, Jane')).toBeInTheDocument()
        expect(getByText('Jane')).toBeInTheDocument()
        expect(getByText('89')).toBeInTheDocument()
        
        expect(getByText('City Park')).toBeInTheDocument()
        expect(getByText('2020-01-01')).toBeInTheDocument()
        expect(getByText('Fritz, Hanni, Nanni')).toBeInTheDocument()
        expect(getByText('Fritz')).toBeInTheDocument()
        expect(getByText('35')).toBeInTheDocument()

        const buttons = getAllByRole('button')
        expect(buttons).toHaveLength(2)
      })
})