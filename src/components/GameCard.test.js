import GameCard from './GameCard'
import { getByTestId, render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('GameCard', () => {
  
  it('renders correctly', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { container } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows all texts', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByText } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock} 
            onEdit={onEditMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
  })

  it('has delete button', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByTestId } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    expect(getByTestId('button-delete-icon')).toBeInTheDocument()
  })

  it('has edit button', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByTestId } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    expect(getByTestId('button-edit-icon')).toBeInTheDocument()
  })

  it('renders delete field', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByText, getByTestId } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    user.click(getByTestId('button-delete-icon'))
    expect(getByText('Do you want to delete this gamecard?')).toBeInTheDocument()
    expect(getByTestId('button-delete')).toBeInTheDocument()
    expect(getByTestId('button-cancel')).toBeInTheDocument()
  })

  it('calls onDeleteMock by clicking second delete button', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByTestId } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    user.click(getByTestId('button-delete-icon'))
    user.click(getByTestId('button-delete'))
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })

  it('shows the gamecard after clicking the cancel button in delete field', () => {
    const onDeleteMock = jest.fn()
    const onEditMock = jest.fn()
    const { getByText, getByTestId } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="2020-12-24"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
            onEdit={onEditMock}
        />)
    user.click(getByTestId('button-delete-icon'))
    user.click(getByTestId('button-cancel'))
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('2020-12-24')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
    expect(getByTestId('button-delete-icon')).toBeInTheDocument()
    expect(getByTestId('button-edit-icon')).toBeInTheDocument()
  })
})