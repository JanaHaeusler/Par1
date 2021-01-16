import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CheckIconLightText } from '../Icons/Icons'
import Button from './Button'

const TestIcon = JSON.stringify(CheckIconLightText)

const testProps = {
  isMain: true,
  disabled: false,
  onClick: jest.fn(),
  iconComponent: TestIcon,
  text: 'Test Text',
}

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button {...testProps} />)
    expect(container).toMatchSnapshot()
  })

  it('shows the right text', () => {
    const { getByText } = render(<Button {...testProps} />)
    expect(getByText(/Test Text/)).toBeInTheDocument()
  })

  it('is disabled', () => {
    const props = { ...testProps, disabled: true }
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('is not main button', () => {
    const props = { ...testProps, isMain: false }
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    expect(button).not.toHaveAttribute('isMain')
  })

  it('calls onClickMock on click', () => {
    const onClickMock = jest.fn()
    const props = { ...testProps, onClick: onClickMock }
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
