import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SaveGameForm from './SaveGameForm'

describe('SaveGameForm', () => {
  
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })
  })

  it('calls onSubmit with correct data and resets form', () => {
      const onSubmitMock = jest.fn()
      const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
      user.type(getByLabelText('Location'), 'Horner Racecourse') 
      user.type(getByLabelText('Date'), '2020-11-21') 
      user.type(getByLabelText('Player(s)'), 'John, Jane') 
      user.type(getByLabelText('Winner(s)'), 'Jane') 
      user.type(getByLabelText('Total Shots Winner(s)'), '42') 
      user.click(getByRole('button'))
      expect(onSubmitMock).toHaveBeenCalledWith({
        location:'Horner Racecourse',
        date:'2020-11-21',
        players:'John, Jane',
        winner:'Jane',
        shots:'42',
      })
      expect(getByLabelText('Location')).toHaveValue('')
      expect(getByLabelText('Date')).toHaveValue('')
      expect(getByLabelText('Player(s)')).toHaveValue('')
      expect(getByLabelText('Winner(s)')).toHaveValue('')
      expect(getByLabelText('Total Shots Winner(s)')).toHaveValue(null)
  })

  it('checks if submit button is disabled when input fields are not valid', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), '    ') 
    user.type(getByLabelText('Date'), '') 
    user.type(getByLabelText('Player(s)'), ' ') 
    user.type(getByLabelText('Winner(s)'), '  ') 
    user.type(getByLabelText('Total Shots Winner(s)'), '5') 
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('checks if date input has the correct format', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020.11.21') // WRONG DATE FORMAT, SHOULD BE 2020-11-21
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '78') // not working, because input is type = number
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('checks if shots input is invalid for numbers less than 18', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '17') 
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('checks if shots input is valid for numbers greater than 17', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '18') 
    const button = getByRole('button')
    expect(button).toBeEnabled()
  })

  it('checks if shots input is invalid for numbers greater than 126', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '127') 
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('checks if shots input is valid for numbers less than 127', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '126') 
    const button = getByRole('button')
    expect(button).toBeEnabled()
  })

  it('checks that onSubmit is not called by clicking on disabled submit button', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), '   ') 
    user.type(getByLabelText('Date'), '') 
    user.type(getByLabelText('Player(s)'), '') 
    user.type(getByLabelText('Winner(s)'), '   ') 
    user.type(getByLabelText('Total Shots Winner(s)'), '') 
    const button = getByRole('button')
    expect(button).toBeDisabled()
    user.click(button)
    expect(onSubmitMock).not.toHaveBeenCalled()
  })
  
  it('checks if inputs are filled with values of the gamecard to be edited', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText } = render(<SaveGameForm 
      onSubmit={onSubmitMock} 
      isEditFormShown={true} 
      targetProfile={{
        location: 'City Park',
        date: '2020-01-01',
        players: 'Fritz, Hanni, Nanni',
        winner: 'Fritz',
        shots: '35',
        _id: '2',
      }}
    />)
    expect(getByLabelText('Location')).toHaveValue('City Park')
    expect(getByLabelText('Date')).toHaveValue('2020-01-01')
    expect(getByLabelText('Player(s)')).toHaveValue('Fritz, Hanni, Nanni')
    expect(getByLabelText('Winner(s)')).toHaveValue('Fritz')
    expect(getByLabelText('Total Shots Winner(s)')).toHaveValue(35)
  })

  it('checks if cancel button exists in edit modus', () => {
    const onSubmitMock = jest.fn()
    const { getByTestId } = render(<SaveGameForm 
      onSubmit={onSubmitMock} 
      isEditFormShown={true} 
      targetProfile={{
        location: 'City Park',
        date: '2020-01-01',
        players: 'Fritz, Hanni, Nanni',
        winner: 'Fritz',
        shots: '35',
        _id: '2',
      }}
    />)
    const ButtonCancel = getByTestId('button-cancel')
    expect(ButtonCancel).toBeInTheDocument()
  })
})