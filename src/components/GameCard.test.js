import GameCard from './GameCard'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('GameCard', () => {
  
  it('renders correctly', () => {
    const onDeleteMock = jest.fn()
    const { container } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows all texts', () => {
    const onDeleteMock = jest.fn()
    const { getByText } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
  })

  it('has delete button', () => {
    const onDeleteMock = jest.fn()
    const { getByRole} = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    const deleteButton = getByRole('button')
    expect(deleteButton).toBeInTheDocument()
  })

  it('renders delete field', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByRole } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    const deleteButton = getByRole('button')
    user.click(deleteButton)
    expect(getByText('Do you want to delete this gamecard?')).toBeInTheDocument()
    expect(getByText('Delete')).toBeInTheDocument()
    expect(getByText('X Cancel')).toBeInTheDocument()
  })

  it('calls onDeleteMock by clicking delete button', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByRole } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    const deleteButton = getByRole('button')
    user.click(deleteButton)
    user.click(getByText('Delete'))
    expect(onDeleteMock).toHaveBeenCalled()
  })

  it('shows the gamecard after clicking the delete-cancel button', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByRole } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    const deleteButton = getByRole('button')
    user.click(deleteButton)
    const cancelButton = getByText('X Cancel')
    user.click(cancelButton)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })
})