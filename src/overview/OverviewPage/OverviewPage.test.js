import { render } from '@testing-library/react'
import OverviewPage from './OverviewPage'

const testProps = {
    savedGameProfiles: {
        byId: {
          1: {
            location: 'Horner Racecourse',
            date: '2020-12-24',
            players: 'John, Jane',
            winner: 'Jane',
            shots: '89',
            _id: '1',
          },
          2: {
            location: 'City Park',
            date: '2020-01-01',
            players: 'Fritz, Hanni, Nanni',
            winner: 'Fritz',
            shots: '35',
            _id: '2',
          },
        },
        allIds: [1, 2],
      },
    deleteGameProfile: jest.fn(),
    prepareEditModus: jest.fn(),
    showCreatePage: jest.fn(),
  }

describe('OverviewPage', () => {
    it('renders correctly', () => {
        const { container } = render(<OverviewPage {...testProps}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})