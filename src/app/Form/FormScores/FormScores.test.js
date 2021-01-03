import { fireEvent, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import FormScores from './FormScores'

const testProps = {
    formInputs: {
        location: 'City Park',
        date: '2020-12-24',
        winner: 'Sarah',
        shots: '28',
        playersString: 'Sarah, Hannes',
        playersArray: ['Sarah', 'Hannes'],
        scores: {
          Sarah: {
            hole1: '',
            hole2: '',
            hole3: '',
            hole4: '',
            hole5: '',
            hole6: '',
            hole7: '',
            hole8: '',
            hole9: '',
            hole10: '',
            hole11: '',
            hole12: '',
            hole13: '',
            hole14: '',
            hole15: '',
            hole16: '',
            hole17: '',
            hole18: '',
          },
          Hannes: {
            hole1: '',
            hole2: '',
            hole3: '',
            hole4: '',
            hole5: '',
            hole6: '',
            hole7: '',
            hole8: '',
            hole9: '',
            hole10: '',
            hole11: '',
            hole12: '',
            hole13: '',
            hole14: '',
            hole15: '',
            hole16: '',
            hole17: '',
            hole18: '',
          },
        },
        _id: '1',
      },
    isSaveButtonShown: false,
    updateDirtyInputs: jest.fn(),
    handleChange: jest.fn(),
    showErrorMessage: jest.fn(),
    handleSubmit: jest.fn(),
    handleCancel: jest.fn(),
}

describe('FormScores', () => {

    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
            getItem: jest.fn(() => null),
            setItem: jest.fn(() => null)
            },
            writable: true
        })
    })
  
  it('renders snapshot correctly', () => {
    const { container } = render(<FormScores {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has two buttons', () => {
    const { getByText } = render(<FormScores {...testProps} />)
    expect(getByText('Save')).toBeInTheDocument()
    expect(getByText('Cancel')).toBeInTheDocument()
  })

  it('has disabled save button', () => {
    const { getByTestId} = render(<FormScores {...testProps} />)
    expect(getByTestId('button-save')).toBeDisabled()
  })

  it('has enabled save button', () => {
    const props = {...testProps, isSaveButtonShown: true}
    const { getByTestId} = render(<FormScores {...props} />)
    expect(getByTestId('button-save')).toBeEnabled()
  })

  it('calls updateDirtyInputsMock on blur event', () => {
    const updateDirtyInputsMock = jest.fn()
    const props = {...testProps, updateDirtyInputs: updateDirtyInputsMock}
    const { getByLabelText } = render(<FormScores {...props} />)
    const RandomTestInput = getByLabelText('score hole1-Sarah')
    fireEvent.blur(RandomTestInput)
    expect(updateDirtyInputsMock).toHaveBeenCalled()
  })

  it('calls handleChangeMock on change event', () => {
    const handleChangeMock = jest.fn()
    const props = {...testProps, handleChange: handleChangeMock}
    const { getByLabelText } = render(<FormScores {...props} />)
    const RandomTestInput = getByLabelText('score hole16-Hannes')
    fireEvent.change(RandomTestInput, { target: { value: '5' } })
    expect(handleChangeMock).toHaveBeenCalledTimes(1)
    expect(handleChangeMock).toHaveBeenCalledWith('hole16-Hannes', '5')
  })

  it('calls showErrorMessageMock', () => {
    const showErrorMessageMock = jest.fn()
    const props = {...testProps, showErrorMessage: showErrorMessageMock}
    render(<FormScores {...props} />)
    expect(showErrorMessageMock).toHaveBeenCalledTimes(1)
  })

  it('calls handleSubmitMock on submitting the form', () => {
    const handleSubmitMock = jest.fn()
    const props = {...testProps, isSaveButtonShown: true, handleSubmit: handleSubmitMock}
    const { getByTestId } = render(<FormScores {...props} />)
    const Form = getByTestId('form')
    fireEvent.submit(Form)
    expect(handleSubmitMock).toHaveBeenCalled()
  })

  it('calls handleCancelMock on clicking cancel button', () => {
    const handleCancelMock = jest.fn()
    const props = {...testProps, isSaveButtonShown: true, handleCancel: handleCancelMock}
    const { getByTestId } = render(<FormScores {...props} />)
    user.click(getByTestId('button-cancel'))
    expect(handleCancelMock).toHaveBeenCalled()
  })
})