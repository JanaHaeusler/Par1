import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
    it('has the right text', () => {
        const { container } = render(<Button>Test Text</Button>)
        expect(container.firstChild).toMatchSnapshot()
    })
})