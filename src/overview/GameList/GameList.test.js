import { render } from '@testing-library/react'
import GameList from './GameList'

const testProps = {
  savedGameProfiles: {
    byId: {
      1: {
        location: 'City Park',
        date: '2020-12-24',
        winner: 'Sarah',
        shots: '28',
        playersString: 'Sarah, Hannes',
        playersArray: ['Sarah', 'Hannes'],
        scores: {
          Sarah: {
            hole1: '1',
            hole2: '2',
            hole3: '3',
            hole4: '4',
            hole5: '5',
            hole6: '6',
            hole7: '7',
            hole8: '1',
            hole9: '2',
            hole10: '3',
            hole11: '4',
            hole12: '5',
            hole13: '6',
            hole14: '7',
            hole15: '1',
            hole16: '2',
            hole17: '3',
            hole18: '4',
          },
          Hannes: {
            hole1: '7',
            hole2: '6',
            hole3: '5',
            hole4: '4',
            hole5: '3',
            hole6: '2',
            hole7: '1',
            hole8: '7',
            hole9: '6',
            hole10: '5',
            hole11: '4',
            hole12: '3',
            hole13: '2',
            hole14: '1',
            hole15: '7',
            hole16: '6',
            hole17: '5',
            hole18: '4',
          },
        },
        _id: '1',
      },
      2: {
        location: 'Horner Racecourse',
        date: '2020-12-31',
        winner: 'Fritz',
        shots: '35',
        playersString: 'Fritz, Hugo',
        playersArray: ['Fritz', 'Hugo'],
        scores: {
          Fritz: {
            hole1: '1',
            hole2: '2',
            hole3: '3',
            hole4: '4',
            hole5: '5',
            hole6: '6',
            hole7: '7',
            hole8: '1',
            hole9: '2',
            hole10: '3',
            hole11: '4',
            hole12: '5',
            hole13: '6',
            hole14: '7',
            hole15: '1',
            hole16: '2',
            hole17: '3',
            hole18: '4',
          },
          Hugo: {
            hole1: '7',
            hole2: '6',
            hole3: '5',
            hole4: '4',
            hole5: '3',
            hole6: '2',
            hole7: '1',
            hole8: '7',
            hole9: '6',
            hole10: '5',
            hole11: '4',
            hole12: '3',
            hole13: '2',
            hole14: '1',
            hole15: '7',
            hole16: '6',
            hole17: '5',
            hole18: '4',
          },
        },
        _id: '2',
      },
    },
    allIds: [1, 2],
  },
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  onDetails: jest.fn(),
}

describe('GameList', () => {
  it('renders snapshot correctly', () => {
    const { container } = render(<GameList {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByText, getAllByTestId } = render(<GameList {...testProps} />)

    expect(getByText('City Park')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('Sarah, Hannes')).toBeInTheDocument()
    expect(getByText('Sarah')).toBeInTheDocument()
    expect(getByText('28')).toBeInTheDocument()

    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-31')).toBeInTheDocument()
    expect(getByText('Fritz, Hugo')).toBeInTheDocument()
    expect(getByText('Fritz')).toBeInTheDocument()
    expect(getByText('35')).toBeInTheDocument()

    const ButtonsDelete = getAllByTestId('button-set-delete')
    expect(ButtonsDelete).toHaveLength(2)
    const ButtonsEdit = getAllByTestId('button-edit')
    expect(ButtonsEdit).toHaveLength(2)
  })
})
