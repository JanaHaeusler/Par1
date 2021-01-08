import { render } from '@testing-library/react'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('renders correctly', () => {
    const { container } = render(<AppHeader />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
