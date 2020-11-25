import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import SaveLocally from '../lib/SaveLocally'
import Loadlocally from '../lib/LoadLocally'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(Loadlocally('gameProfiles') ?? [])
    
    SaveLocally('gameProfiles', savedGameProfiles)

    return {
        addGameProfile, 
        savedGameProfiles
    }

    function addGameProfile(gameProfile) {
        setSavedGameProfiles([
            {...gameProfile, _id: uuid()},
            ...savedGameProfiles
        ])
    }
}