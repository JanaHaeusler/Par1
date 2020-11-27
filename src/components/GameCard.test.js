import GameCard from './GameCard'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('GameCard', () => {
  
  it('renders correctly', () => {
    const onDeleteMock = jest.fn()
    const { container } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
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
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('11/04/2020')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
  })

  it('has delete button', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByTitle } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('11/04/2020')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
    const deleteButton = getByTitle('Bin-icon.svg')
    expect(deleteButton).toBeInTheDocument()
  })

  it('renders delete field', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByTitle } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('11/04/2020')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
    
    const deleteButton = getByTitle('Bin-icon.svg')

    user.click(deleteButton)

    expect(getByText('Do you want to delete this gamecard?')).toBeInTheDocument()
    expect(getByText('Delete')).toBeInTheDocument()
    expect(getByText(' &times; Cancel')).toBeInTheDocument()
  })

  it('calls onDeleteMock by clicking delete button and removes gamecard', () => {
    const onDeleteMock = jest.fn()
    const { getByText, getByTitle } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
            id="1"
            onDelete={onDeleteMock}
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('11/04/2020')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()

    const deleteButton = getByTitle('Bin-icon.svg')
    
    user.click(deleteButton)

    expect(getByText('Do you want to delete this gamecard?')).toBeInTheDocument()
    expect(getByText('Delete')).toBeInTheDocument()
    expect(getByText(' &times; Cancel')).toBeInTheDocument()

    user.click(getByText('Delete'))

    expect(onDeleteMock).toHaveBeenCalled()
    
    expect(getByText('Horner Racecourse')).not.toBeInTheDocument()
    expect(getByText('11/04/2020')).not.toBeInTheDocument()
    expect(getByText('John, Jane')).not.toBeInTheDocument()
    expect(getByText('Jane')).not.toBeInTheDocument()
    expect(getByText('56')).not.toBeInTheDocument()
    expect(deleteButton).not.toBeInTheDocument()
    expect(getByText('Do you want to delete this gamecard?')).not.toBeInTheDocument()
    expect(getByText('Delete')).not.toBeInTheDocument()
    expect(getByText(' &times; Cancel')).not.toBeInTheDocument()
    
  })
})