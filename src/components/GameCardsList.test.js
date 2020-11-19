import GameCardsList from './GameCardsList'
import { render } from '@testing-library/react'

describe('GameCardsList', () => {
  
    const savedGameProfiles = [
        {
          location: '',
          date: '',
          players: '',
          winner: '',
          shots:'',
        },
        {
          location: '',
          date: '',
          players: '',
          winner: '',
          shots:'',
        },
      ]
  
  
    it('renders correctly', () => {
        const { container } = render(<GameCardsList savedGameProfiles={savedGameProfiles}/>)
        expect(container.firstChild).toMatchSnapshot()
    })

})