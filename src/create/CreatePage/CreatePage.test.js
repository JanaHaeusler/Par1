import { render } from '@testing-library/react'
import CreatePage from './CreatePage'

const testProps = {
  newGameProfile: {
    location: 'City Park',
    date: '2020-12-24',
    winner: 'Sarah',
    shots: '28',
    playersString: 'Sarah, Hannes',
    playersArray: ['Sarah', 'Hannes'],
    scores: {
      Sarah: {
        hole1: '',
        hole2: '',
        hole3: '',
        hole4: '',
        hole5: '',
        hole6: '',
        hole7: '',
        hole8: '',
        hole9: '',
        hole10: '',
        hole11: '',
        hole12: '',
        hole13: '',
        hole14: '',
        hole15: '',
        hole16: '',
        hole17: '',
        hole18: '',
      },
      Hannes: {
        hole1: '',
        hole2: '',
        hole3: '',
        hole4: '',
        hole5: '',
        hole6: '',
        hole7: '',
        hole8: '',
        hole9: '',
        hole10: '',
        hole11: '',
        hole12: '',
        hole13: '',
        hole14: '',
        hole15: '',
        hole16: '',
        hole17: '',
        hole18: '',
      },
    },
    _id: '1',
  },
  createGameProfile: jest.fn(),
  addGameProfile: jest.fn(),
}

describe('CreatePage', () => {
    it('renders snapshot correctly', () => {
        const { container } = render(<CreatePage {...testProps}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})