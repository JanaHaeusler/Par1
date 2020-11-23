import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SaveGameForm from './SaveGameForm'

describe('SaveGameForm', () => {
  
  const onSaveMock = jest.fn()

  it('calls onSubmit with correct data and resets form', () => {
      
      const { getByLabelText, getByRole } = render(<SaveGameForm onSave={onSaveMock} />)

      user.type(getByLabelText('Location'), 'Horner Racecourse') 
      user.type(getByLabelText('Date'), '2020-11-21') 
      user.type(getByLabelText('Player(s)'), 'John, Jane') 
      user.type(getByLabelText('Winner(s)'), 'Jane') 
      user.type(getByLabelText('Total Shots Winner(s)'), '42') 

      user.click(getByRole('button'))

      // expect(onSaveMock).toHaveBeenCalled()

      expect(onSaveMock).toHaveBeenCalledWith({
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
      expect(getByLabelText('Total Shots Winner(s)')).toHaveValue('')
  })
})