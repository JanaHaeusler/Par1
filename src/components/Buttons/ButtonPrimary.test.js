import { render } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary'
import {ReactComponent as TestIcon} from '../../assets/pencil-icon.svg'


describe('ButtonPrimary', () => {
    it('shows the right text', () => {
        const { getByText } = render(<ButtonPrimary><TestIcon/>Test Text</ButtonPrimary>)
        expect(getByText('Test Text')).toBeInTheDocument()

    })

    it('is disabled', () => {
        const { getByRole} = render(<ButtonPrimary disabled><TestIcon/>Test Text</ButtonPrimary>)
        const button = getByRole('button')
        expect(button).toBeDisabled()
    })
})