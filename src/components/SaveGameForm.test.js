import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SaveGameForm from './SaveGameForm'

describe('SaveGameForm', () => {
  
  const onSubmitMock = jest.fn()

  it('calls onSubmit with correct data and resets form', () => {
      
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

  it('checks if form does not submit when input fields are empty', () => {
      
    const { getByLabelText, getByRole, getByText } = render(<SaveGameForm onSubmit={onSubmitMock} />)

    user.type(getByLabelText('Location'), '') 
    user.type(getByLabelText('Date'), '') 
    user.type(getByLabelText('Player(s)'), '') 
    user.type(getByLabelText('Winner(s)'), '') 
    user.type(getByLabelText('Total Shots Winner(s)'), '') 

    user.click(getByRole('button'))

    expect(onSubmitMock).not.toHaveBeenCalled()
    expect(getByText('Please fill out all input fields.')).toBeInTheDocument()
  })

  it('checks that inputs not just consist of whitespace', () => {
      
    const { getByLabelText, getByRole, getByText } = render(<SaveGameForm onSubmit={onSubmitMock} />)

    user.type(getByLabelText('Location'), '                        ') 
    user.type(getByLabelText('Date'), '                   ') 
    user.type(getByLabelText('Player(s)'), '     ') 
    user.type(getByLabelText('Winner(s)'), '        ') 
    user.type(getByLabelText('Total Shots Winner(s)'), '         ') 

    user.click(getByRole('button'))

    expect(onSubmitMock).not.toHaveBeenCalled()
    expect(getByText('Please fill out all input fields.')).toBeInTheDocument()
  })

  it('checks if shots input is a number greater than 18', () => {
      
    const { getByLabelText, getByRole, getByText } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '4') 
    user.click(getByRole('button'))
    expect(onSubmitMock).not.toHaveBeenCalled()
    expect(getByText('Shots must be a number between 18 and 127')).toBeInTheDocument()
  })

  it('checks if shots input is a number less than 127', () => {
      
    const { getByLabelText, getByRole, getByText } = render(<SaveGameForm onSubmit={onSubmitMock} />)
    user.type(getByLabelText('Location'), 'Horner Racecourse') 
    user.type(getByLabelText('Date'), '2020-11-21') 
    user.type(getByLabelText('Player(s)'), 'John, Jane') 
    user.type(getByLabelText('Winner(s)'), 'Jane') 
    user.type(getByLabelText('Total Shots Winner(s)'), '130') 
    user.click(getByRole('button'))
    expect(onSubmitMock).not.toHaveBeenCalled()
    expect(getByText('Shots must be a number between 18 and 127')).toBeInTheDocument()
  })
})