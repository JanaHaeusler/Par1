import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
    it('has the right text', () => {
        const { getByText } = render(<Button disabled={false}>Test Text</Button>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })
})