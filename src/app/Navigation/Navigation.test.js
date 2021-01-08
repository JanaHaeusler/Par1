import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Navigation />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
