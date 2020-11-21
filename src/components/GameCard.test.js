import GameCard from './GameCard'
import { render } from '@testing-library/react'

describe('GameCard', () => {
  it('renders correctly', () => {
    const { container } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
        />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows all texts', () => {
    const { getByText } = render(
        <GameCard 
            location="Horner Racecourse" 
            date="11/04/2020"
            players="John, Jane"
            winner="Jane"
            shots="56"
        />)
    expect(getByText('Horner Racecourse')).toBeInTheDocument()
    expect(getByText('11/04/2020')).toBeInTheDocument()
    expect(getByText('John, Jane')).toBeInTheDocument()
    expect(getByText('Jane')).toBeInTheDocument()
    expect(getByText('56')).toBeInTheDocument()
  })
})