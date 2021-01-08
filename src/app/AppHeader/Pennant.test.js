import { render } from '@testing-library/react'
import Pennant from './Pennant'

describe('Pennant', () => {
  it('renders correctly', () => {
    const { container } = render(<Pennant />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
