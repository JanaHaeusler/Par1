import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CheckIconWhite } from '../assets/Icons/Icons'
import Button from './Button'

const testProps = {
  main: true,
  disabled: false,
  onClick: jest.fn(),
  iconComponent: CheckIconWhite,
  text: 'Test Text',
}

describe('Button', () => {
  it('shows the right text', () => {
    const { getByText } = render(<Button {...testProps} />)
    expect(getByText('Test Text')).toBeInTheDocument()
  })

  it('is disabled', () => {
    const props = { ...testProps, disabled: true }
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('is not main button', () => {
    const props = { ...testProps, main: false }
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button')
    expect(button).not.toHaveAttribute('main')
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
