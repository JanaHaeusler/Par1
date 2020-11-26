import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(loadLocally('gameProfiles') ?? [])
    
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