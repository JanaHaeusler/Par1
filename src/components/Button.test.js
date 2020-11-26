import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
    it('shows the right text', () => {
        const { getByText } = render(<Button>Test Text</Button>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<Button disabled>Test Text</Button>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})