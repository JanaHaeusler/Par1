import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import saveLocally from '../lib/saveLocally'
import loadlocally from '../lib/loadLocally'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(loadlocally('gameProfiles') ?? [])
    
    saveLocally('gameProfiles', savedGameProfiles)

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