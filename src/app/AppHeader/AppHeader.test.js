import AppHeader from './AppHeader'
import { render } from '@testing-library/react'

describe('AppHeader', () => {
    it('renders correctly', () => {
        const { container } = render(<AppHeader/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})