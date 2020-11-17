import {useState} from 'react'

export default function useFormData() {
    
    const [gameProfile, setGameProfile] = useState({
        location: '',
        date: '',
        players: '',
        winner: '',
        shots:'',
    })

    const [savedGameProfiles, setSavedGameProfiles] = useState([])

    return{
        gameProfile,
        setGameProfile,
        savedGameProfiles,
        setSavedGameProfiles
    }
}