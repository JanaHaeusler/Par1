import { render } from '@testing-library/react'
import ButtonSecondary from './ButtonSecondary'
import {Pencil} from '../Icons'

describe('ButtonSecondary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonSecondary><Pencil/>Test Text</ButtonSecondary>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonSecondary disabled><Pencil/>Test Text</ButtonSecondary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})