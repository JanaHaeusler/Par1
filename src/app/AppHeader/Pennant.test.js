import Pennant from './Pennant'
import { render } from '@testing-library/react'

describe('Pennant', () => {
    it('renders correctly', () => {
        const { container } = render(<Pennant/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})