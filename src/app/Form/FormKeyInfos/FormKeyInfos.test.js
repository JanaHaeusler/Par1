import { fireEvent, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import FormKeyInfos from './FormKeyInfos'

const testProps = {
  formInputs: {
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  },
  isSaveButtonShown: false,
  updateDirtyInputs: jest.fn(),
  handleChange: jest.fn(),
  showErrorMessage: jest.fn(),
  handleSubmit: jest.fn(),
  handleCancel: jest.fn(),
  setDisabledState: jest.fn(),
}

describe('FormKeyInfos', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    })
  })

  it('renders snapshot correctly', () => {
    const { container } = render(<FormKeyInfos {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByLabelText, getByTestId } = render(
      <FormKeyInfos {...testProps} />
    )
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
    expect(getByTestId('button-cancel')).toBeInTheDocument()
  })

  it('has enabled save button', () => {
    const props = { ...testProps, isSaveButtonShown: true }
    const { getByTestId } = render(<FormKeyInfos {...props} />)
    expect(getByTestId('button-save')).toBeEnabled()
  })

  it('calls updateDirtyInputsMock on blur event', () => {
    const updateDirtyInputsMock = jest.fn()
    const props = { ...testProps, updateDirtyInputs: updateDirtyInputsMock }
    const { getByLabelText } = render(<FormKeyInfos {...props} />)
    const InputLocation = getByLabelText('Location')
    fireEvent.blur(InputLocation)
    expect(updateDirtyInputsMock).toHaveBeenCalled()
  })

  it('calls handleChangeMock on change event', () => {
    const handleChangeMock = jest.fn()
    const props = { ...testProps, handleChange: handleChangeMock }
    const { getByLabelText } = render(<FormKeyInfos {...props} />)
    const InputPlayers = getByLabelText('Player(s)')
    fireEvent.change(InputPlayers, { target: { value: 'test' } })
    expect(handleChangeMock).toHaveBeenCalledTimes(1)
    expect(handleChangeMock).toHaveBeenCalledWith('players', 'test')
  })

  it('calls showErrorMessageMock', () => {
    const showErrorMessageMock = jest.fn()
    const props = { ...testProps, showErrorMessage: showErrorMessageMock }
    render(<FormKeyInfos {...props} />)
    expect(showErrorMessageMock).toHaveBeenCalledTimes(5)
  })

  it('calls handleSubmitMock on submitting the form', () => {
    const handleSubmitMock = jest.fn()
    const props = {
      ...testProps,
      isSaveButtonShown: true,
      handleSubmit: handleSubmitMock,
    }
    const { getByTestId } = render(<FormKeyInfos {...props} />)
    const Form = getByTestId('form')
    fireEvent.submit(Form)
    expect(handleSubmitMock).toHaveBeenCalled()
  })

  it('calls handleCancelMock on clicking cancel button', () => {
    const handleCancelMock = jest.fn()
    const props = {
      ...testProps,
      handleCancel: handleCancelMock,
    }
    const { getByTestId } = render(<FormKeyInfos {...props} />)
    user.click(getByTestId('button-cancel'))
    expect(handleCancelMock).toHaveBeenCalled()
  })

  it('calls setDisabledStateMock when rendered', () => {
    const setDisabledStateMock = jest.fn()
    const props = {
      ...testProps,
      setDisabledState: setDisabledStateMock,
    }
    render(<FormKeyInfos {...props} />)
    expect(setDisabledStateMock).toHaveBeenCalledTimes(1)
  })
})
