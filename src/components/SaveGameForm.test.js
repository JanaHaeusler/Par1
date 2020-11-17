import SaveGameForm from './SaveGameForm'
import { render } from '@testing-library/react'

describe('SaveGameForm', () => {
  it('renders DOM correctly', () => {
    const { container } = render(<SaveGameForm/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders labels', () => {
    const { getByLabelText } = render(<SaveGameForm/>)

    expect(getByLabelText(/location/i)).toBeInTheDocument()
    expect(getByLabelText(/date/i)).toBeInTheDocument()
    expect(getByLabelText(/player\(s\)/i)).toBeInTheDocument()
    expect(getByLabelText('Winner(s)')).toBeInTheDocument()
    expect(getByLabelText('Total Shots Winner(s)')).toBeInTheDocument()
  })

  it('renders placeholders', () => {
    const { getByPlaceholderText } = render(<SaveGameForm/>)

    expect(getByPlaceholderText(/type location/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/john, jane/i)).toBeInTheDocument()
    expect(getByPlaceholderText('Jane')).toBeInTheDocument()
    expect(getByPlaceholderText(/38/i)).toBeInTheDocument()
  })

})

