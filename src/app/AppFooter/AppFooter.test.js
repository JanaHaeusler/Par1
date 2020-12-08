import AppFooter from './AppFooter'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

const testProps = {
    handleClick: jest.fn()
}

describe('AppFooter', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Router>
                <AppFooter {...testProps}/>
            </Router> 
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})