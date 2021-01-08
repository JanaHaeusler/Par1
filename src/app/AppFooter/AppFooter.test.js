import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppFooter from './AppFooter'

describe('AppFooter', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <AppFooter />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
