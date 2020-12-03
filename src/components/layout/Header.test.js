import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
    it('reders correctly', () => {
        const { container } = render(<Header/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})