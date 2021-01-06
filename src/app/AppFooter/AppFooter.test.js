import AppFooter from './AppFooter'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('AppFooter', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Router>
                <AppFooter/>
            </Router> 
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})