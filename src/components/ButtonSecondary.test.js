import { render } from '@testing-library/react'

import ButtonSecondary from './ButtonPrimary'

describe('ButtonSecondary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonSecondary>Test Text</ButtonSecondary>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonSecondary disabled>Test Text</ButtonSecondary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})