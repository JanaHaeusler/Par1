import { render } from '@testing-library/react'
import SaveGamePage from './SaveGamePage'

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

describe('SaveGamePage', () => {
    it('renders normal form modus correctly', () => {
        const { container } = render(<SaveGamePage {...testProps}/>)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('renders edit form modus correctly', () => {
      const props = {...testProps, isEditFormShown: true}
      const { container } = render(<SaveGamePage {...props}/>)
      expect(container.firstChild).toMatchSnapshot()
  })
})