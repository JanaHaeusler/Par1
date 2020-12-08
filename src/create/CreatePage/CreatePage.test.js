import { render } from '@testing-library/react'
import CreatePage from './CreatePage'

const testProps = {
  formInputs: {
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  },
  showSaveButton: false,
  isEditFormShown: false,
  updateDirtyInputs: jest.fn(),
  handleChange: jest.fn(),
  showErrorMessage: jest.fn(),
  handleSubmit: jest.fn(),
  handleCancelEditModus: jest.fn(),
  }

describe('CreatePage', () => {
    it('renders normal form modus correctly', () => {
        const { container } = render(<CreatePage {...testProps}/>)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('renders edit form modus correctly', () => {
      const props = {...testProps, isEditFormShown: true}
      const { container } = render(<CreatePage {...props}/>)
      expect(container.firstChild).toMatchSnapshot()
  })
})