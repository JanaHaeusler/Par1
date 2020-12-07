import GameCard from './GameCard'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

const testProps = {
  location: "Horner Racecourse", 
  date: "2020-12-24",
  players: "John, Jane",
  winner: "Jane",
  shots: "56",
  id: "1",
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  showSaveGamePage: jest.fn(),
}

describe('GameCard', () => {
  
  it('renders correctly', () => {
    const { container } = render(<GameCard {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows all texts', () => {
    const { getByText } = render(<GameCard {...testProps} />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
  })

  it('has delete button', () => {
    const { getByTestId } = render(<GameCard {...testProps} />)
    expect(getByTestId('button-set-delete')).toBeInTheDocument()
  })

  it('has edit button', () => {
    const { getByTestId } = render(<GameCard {...testProps} />)
    expect(getByTestId('button-edit')).toBeInTheDocument()
  })

  it('renders delete field', () => {
    const { getByText, getByTestId } = render(<GameCard {...testProps} />)
    user.click(getByTestId('button-set-delete'))
    expect(getByText('Do you want to delete this gamecard?')).toBeInTheDocument()
    expect(getByTestId('button-delete')).toBeInTheDocument()
    expect(getByTestId('button-cancel')).toBeInTheDocument()
  })

  it('calls onDeleteMock by clicking second delete button', () => {
    const onDeleteMock = jest.fn()
    const props = { ...testProps, onDelete: onDeleteMock }
    const { getByTestId } = render(<GameCard {...props} />)
    user.click(getByTestId('button-set-delete'))
    user.click(getByTestId('button-delete'))
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })

  it('shows the gamecard after clicking the cancel button in delete field', () => {
    const { getByText, getByTestId } = render(<GameCard {...testProps} />)
    user.click(getByTestId('button-set-delete'))
    user.click(getByTestId('button-cancel'))
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
    expect(getByTestId('button-set-delete')).toBeInTheDocument()
    expect(getByTestId('button-edit')).toBeInTheDocument()
  })
})