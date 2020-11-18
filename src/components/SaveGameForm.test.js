import { render } from '@testing-library/react'
import SaveGameForm from './SaveGameForm'


describe('SaveGameForm', () => {
  
  const setGameProfile = jest.fn() 
  const setSavedGameProfiles = jest.fn()
  const gameProfile = {
      location: '',
      date: '',
      players: '',
      winner: '',
      shots:'',
    }
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

  it('renders labels', () => {
      
      const { getByLabelText } = render(<SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />)
  
      expect(getByLabelText(/location/i)).toBeInTheDocument()
      expect(getByLabelText(/date/i)).toBeInTheDocument()
      expect(getByLabelText(/player\(s\)/i)).toBeInTheDocument()
      expect(getByLabelText('Winner(s)')).toBeInTheDocument()
      expect(getByLabelText('Total Shots Winner(s)')).toBeInTheDocument()
  })


  it('renders placeholders', () => {
    
    const { getByPlaceholderText } = render(<SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />)
  

    expect(getByPlaceholderText(/type location/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/john, jane/i)).toBeInTheDocument()
    expect(getByPlaceholderText('Jane')).toBeInTheDocument()
    expect(getByPlaceholderText(/38/i)).toBeInTheDocument()
  })

  it('renders button', () => {
    
    const { getByRole } = render(<SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />)
  
    const button = getByRole('button')
    expect(button).toBeInTheDocument() 
   
  })

  it('resets form', () => {

    const { getByLabelText } = render(<SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />)
    
    const locationInput = getByLabelText(/location/i)
    const dateInput =  getByLabelText(/date/i)
    const playersInput =  getByLabelText (/player\(s\)/i)
    const winnerInput =  getByLabelText('Winner(s)')
    const shotsInput =  getByLabelText('Total Shots Winner(s)')

    expect(locationInput).toHaveValue('') 
    expect(dateInput).toHaveValue('') 
    expect(playersInput).toHaveValue('') 
    expect(winnerInput).toHaveValue('') 
    expect(shotsInput).toHaveValue('') 

  })
})