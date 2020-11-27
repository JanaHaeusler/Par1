import ButtonSecondary from './ButtonSecondary'
import {ReactComponent as TestIcon} from '../../assets/bin-icon.svg'
import { render } from '@testing-library/react'

describe('ButtonSecondary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonSecondary><TestIcon/>Test Text</ButtonSecondary>)
        expect(getByText('Test Text')).toBeInTheDocument()
    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonSecondary disabled><TestIcon/>Test Text</ButtonSecondary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})