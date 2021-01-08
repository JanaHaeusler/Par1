import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Game from './Game'

const testProps = {
  savedGameProfile: {
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
    _id: 1,
  },
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  onDetails: jest.fn(),
}

describe('Game', () => {
  it('renders snapshot correctly', () => {
    const { container } = render(<Game {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows all game key infos', () => {
    const { getByText } = render(<Game {...testProps} />)
    expect(getByText('City Park')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('Sarah, Hannes')).toBeInTheDocument()
    expect(getByText('Sarah')).toBeInTheDocument()
    expect(getByText('28')).toBeInTheDocument()
  })

  it('has delete button', () => {
    const { getByTestId } = render(<Game {...testProps} />)
    expect(getByTestId('button-set-delete')).toBeInTheDocument()
  })

  it('has edit button', () => {
    const { getByTestId } = render(<Game {...testProps} />)
    expect(getByTestId('button-edit')).toBeInTheDocument()
  })

  it('has details button', () => {
    const { getByTestId } = render(<Game {...testProps} />)
    expect(getByTestId('button-details')).toBeInTheDocument()
  })

  it('renders delete field', () => {
    const { getByText, getByTestId } = render(<Game {...testProps} />)
    user.click(getByTestId('button-set-delete'))
    expect(getByText('Do you want to delete this game?')).toBeInTheDocument()
    expect(getByTestId('button-delete')).toBeInTheDocument()
    expect(getByTestId('button-cancel')).toBeInTheDocument()
  })

  it('calls onDeleteMock by clicking second delete button', () => {
    const onDeleteMock = jest.fn()
    const props = { ...testProps, onDelete: onDeleteMock }
    const { getByTestId } = render(<Game {...props} />)
    user.click(getByTestId('button-set-delete'))
    user.click(getByTestId('button-delete'))
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })
})
