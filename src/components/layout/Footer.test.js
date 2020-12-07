import Footer from './Footer'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

const testProps = {
    handleClick: jest.fn()
}

describe('Footer', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Router>
                <Footer {...testProps}/>
            </Router> 
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})