import Navigation from './Navigation'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import user from '@testing-library/user-event'

const testProps = {
    handleClick: jest.fn()
}

describe('Navigation', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Router>
                <Navigation {...testProps}/>
            </Router> 
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('calls handleClickMock on clicking home link', () => {
        const handleClickMock = jest.fn()
        const props = { ...testProps, handleClick: handleClickMock }
        const { getByTestId } = render(
            <Router>
                <Navigation {...props}/>
            </Router> 
        )
        const HomeLink = getByTestId('button-home-page')
        user.click(HomeLink)
        expect(handleClickMock).toHaveBeenCalled()
    })

    it('calls handleClickMock on clicking form link', () => {
        const handleClickMock = jest.fn()
        const props = { ...testProps, handleClick: handleClickMock }
        const { getByTestId } = render(
            <Router>
                <Navigation {...props}/>
            </Router> 
        )
        const FormLink = getByTestId('button-create-page')
        user.click(FormLink)
        expect(handleClickMock).toHaveBeenCalled()
    })
})