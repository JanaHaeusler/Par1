import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SaveGameForm from './SaveGameForm'

describe('SaveGameForm', () => {
  const onSubmitMock = jest.fn()

  it('calls onSubmit with correct data and resets', () => {
    const { getByLabelText, getByRole } = render(
      <SaveGameForm onSubmit={onSubmitMock} />
    )

    user.type(getByLabelText('Location'), 'foo')
    user.type(getByLabelText('Date'), '2020-11-21')
    user.type(getByLabelText('Player(s)'), 'John, Jane')
    user.type(getByLabelText('Winner(s)'), 'Jane')
    user.type(getByLabelText('Total Shots Winner(s)'), '42')

    user.click(getByRole('button'))

    expect(onSubmitMock).toHaveBeenCalledWith({
      location: 'foo',
      date: '2020-11-21',
      players: 'John, Jane',
      winner: 'Jane',
      shots: '42',
    })

    expect(getByLabelText('Location')).toHaveValue('')
    expect(getByLabelText('Date')).toHaveValue('')
    expect(getByLabelText('Player(s)')).toHaveValue('')
    expect(getByLabelText('Winner(s)')).toHaveValue('')
    expect(getByLabelText('Total Shots Winner(s)')).toHaveValue('')
  })
})
