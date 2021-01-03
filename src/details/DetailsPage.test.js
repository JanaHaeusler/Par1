import { render } from '@testing-library/react'
import DetailsPage from './DetailsPage'

const testProps = {
    targetProfile: {
        location: 'City Park',
        date: '2020-12-24',
        winner: 'Sarah',
        shots: '28',
        playersString: 'Sarah, Hannes',
        playersArray: ['Sarah', 'Hannes'],
        scores: {
          Sarah: {
            hole1: '1',
            hole2: '2',
            hole3: '3',
            hole4: '4',
            hole5: '5',
            hole6: '6',
            hole7: '7',
            hole8: '1',
            hole9: '2',
            hole10: '3',
            hole11: '4',
            hole12: '5',
            hole13: '6',
            hole14: '7',
            hole15: '1',
            hole16: '2',
            hole17: '3',
            hole18: '4',
          },
          Hannes: {
            hole1: '7',
            hole2: '6',
            hole3: '5',
            hole4: '4',
            hole5: '3',
            hole6: '2',
            hole7: '1',
            hole8: '7',
            hole9: '6',
            hole10: '5',
            hole11: '4',
            hole12: '3',
            hole13: '2',
            hole14: '1',
            hole15: '7',
            hole16: '6',
            hole17: '5',
            hole18: '4',
          },
        },
        _id: '1',
      },
}

describe('DetailsPage', () => {
    it('renders snapshot correctly', () => {
        const { container } = render(<DetailsPage {...testProps}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})