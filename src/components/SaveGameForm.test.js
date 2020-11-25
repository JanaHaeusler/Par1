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
    const { getByLabelText, getByRole} = render(<SaveGameForm onSubmit={onSubmitMock} />)
    
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
    const { getByLabelText, getByRole} = render(<SaveGameForm onSubmit={onSubmitMock} />)
    
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020.11.21') // WRONG DATE FORMAT, SHOULD BE 2020-11-21
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '78') // not working, because input is type = number

    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('checks if shots input is a number greater than 18', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole} = render(<SaveGameForm onSubmit={onSubmitMock} />)
    
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '4') 
    
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })

  it('checks if shots input is a number less than 127', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole} = render(<SaveGameForm onSubmit={onSubmitMock} />)
    
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '140') 
    
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })

  it('checks if onSubmit is called by clicking on disabled submit button', () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByRole} = render(<SaveGameForm onSubmit={onSubmitMock} />)

    user.type(getByLabelText('Location'), '   ') 
    user.type(getByLabelText('Date'), '') 
    user.type(getByLabelText('Player(s)'), '') 
    user.type(getByLabelText('Winner(s)'), '   ') 
    user.type(getByLabelText('Total Shots Winner(s)'), '') 

    const button = getByRole('button')

    expect(button).toBeDisabled()

    user.click(getByRole('button'))

    expect(onSubmitMock).not.toHaveBeenCalled()
  })
})