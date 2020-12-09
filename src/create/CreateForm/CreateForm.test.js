import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import CreateForm from './CreateForm'

const testProps = {
  formInputs: {
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  },
  isSaveButtonShown: false,
  isEditFormShown: false,
  updateDirtyInputs: jest.fn(),
  handleChange: jest.fn(),
  showErrorMessage: jest.fn(),
  handleSubmit: jest.fn(),
  handleCancelEditModus: jest.fn(),
}

describe('CreateForm', () => {
  
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })
  })

  it('renders normal form correctly', () => {
    const { getByLabelText, getByTestId} = render(<CreateForm {...testProps} />)
    expect(getByLabelText('Location')).toBeInTheDocument()
    expect(getByLabelText('Date')).toBeInTheDocument()
    expect(getByLabelText('Player(s)')).toBeInTheDocument()
    expect(getByLabelText('Winner(s)')).toBeInTheDocument()
    expect(getByLabelText('Total Shots Winner(s)')).toBeInTheDocument()

    expect(getByLabelText('Location')).toHaveValue('')
    expect(getByLabelText('Date')).toHaveValue('')
    expect(getByLabelText('Player(s)')).toHaveValue('')
    expect(getByLabelText('Winner(s)')).toHaveValue('')
    expect(getByLabelText('Total Shots Winner(s)')).toHaveValue(null)

    expect(getByTestId('button-save')).toBeDisabled()
  })

  it('has enabled save button', () => {
    const props = {...testProps, isSaveButtonShown: true}
    const { getByTestId} = render(<CreateForm {...props} />)
    expect(getByTestId('button-save')).toBeEnabled()
  })

  it('renders form in edit modus correctly', () => {
    const props = {...testProps, isEditFormShown: true}
    const { getByLabelText, getByTestId} = render(<CreateForm {...props} />)
    expect(getByLabelText('Location')).toBeInTheDocument()
    expect(getByLabelText('Date')).toBeInTheDocument()
    expect(getByLabelText('Player(s)')).toBeInTheDocument()
    expect(getByLabelText('Winner(s)')).toBeInTheDocument()
    expect(getByLabelText('Total Shots Winner(s)')).toBeInTheDocument()

    expect(getByTestId('button-save')).toBeDisabled()
    expect(getByTestId('button-cancel')).toBeInTheDocument()
  })

  it('calls handleSubmitMock on submitting the form', () => {
    const handleSubmitMock = jest.fn()
    const props = {...testProps, isSaveButtonShown: true, handleSubmit: handleSubmitMock}
    const {getByTestId} = render(<CreateForm {...props} />)
    const Form = getByTestId("form")
    fireEvent.submit(Form)
    expect(handleSubmitMock).toHaveBeenCalled()
  })

  it('calls handleCancelEditModusMock on cancel button click in edit modus', () => {
    const handleCancelEditModusMock = jest.fn()
    const props = {...testProps, isEditFormShown: true, handleCancelEditModus: handleCancelEditModusMock}
    const { getByTestId} = render(<CreateForm {...props} />)
    const ButtonCancel = getByTestId('button-cancel')
    user.click(ButtonCancel)
    expect(handleCancelEditModusMock).toHaveBeenCalled()
  })

  it('calls updateDirtyInputsMock on blur event', () => {
    const updateDirtyInputsMock = jest.fn()
    const props = {...testProps, updateDirtyInputs: updateDirtyInputsMock}
    const { getByLabelText } = render(<CreateForm {...props} />)
    const InputLocation = getByLabelText('Location')
    fireEvent.blur(InputLocation)
    expect(updateDirtyInputsMock).toHaveBeenCalled()
  })

  it('calls handleChangeMock on change event', () => {
    const handleChangeMock = jest.fn()
    const props = {...testProps, handleChange: handleChangeMock}
    const { getByLabelText } = render(<CreateForm {...props} />)
    const InputPlayers = getByLabelText('Player(s)')
    fireEvent.change(InputPlayers, { target: { value: 'test' } })
    expect(handleChangeMock).toHaveBeenCalledTimes(1)
    expect(handleChangeMock).toHaveBeenCalledWith('players', 'test')
  })

})