import { render } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary'
import {Pencil} from '../Icons'

describe('ButtonPrimary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonPrimary><Pencil/>Test Text</ButtonPrimary>)
        expect(getByText('Test Text')).toBeInTheDocument()

    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonPrimary disabled><Pencil/>Test Text</ButtonPrimary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})