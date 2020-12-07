import { render } from '@testing-library/react'
import ButtonSecondary from './ButtonSecondary'
import {PencilIcon} from '../Icons'

describe('ButtonSecondary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonSecondary><PencilIcon/>Test Text</ButtonSecondary>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonSecondary disabled><PencilIcon/>Test Text</ButtonSecondary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})