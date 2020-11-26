import { render } from '@testing-library/react'

import ButtonPrimary from './ButtonPrimary'

describe('ButtonPrimary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonPrimary>Test Text</ButtonPrimary>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonPrimary disabled>Test Text</ButtonPrimary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})