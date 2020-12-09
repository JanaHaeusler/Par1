import GameList from './GameList'
import { render } from '@testing-library/react'

const testProps = {
  savedGameProfiles: {
    byId: {
      1: {
        location: 'Horner Racecourse',
        date: '2020-12-24',
        players: 'John, Jane',
        winner: 'Jane',
        shots: '89',
        _id: '1',
      },
      2: {
        location: 'City Park',
        date: '2020-01-01',
        players: 'Fritz, Hanni, Nanni',
        winner: 'Fritz',
        shots: '35',
        _id: '2',
      },
    },
    allIds: [1, 2],
  }, 
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  showCreatePage: jest.fn(),
}

describe('GameList', () => {
  
    it('renders correctly', () => {
        const { container, getByText, getAllByTestId } = render(<GameList {...testProps}/>)
        
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

        const ButtonDelete = getAllByTestId('button-set-delete')
        expect(ButtonDelete).toHaveLength(2)
        const ButtonEdit = getAllByTestId('button-edit')
        expect(ButtonEdit).toHaveLength(2)
      })
})