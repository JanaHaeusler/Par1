import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

const STORAGE_KEY = 'gameProfiles'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(loadLocally(STORAGE_KEY) ?? [])
    
    saveLocally(STORAGE_KEY, savedGameProfiles)

    return {
        addGameProfile, 
        savedGameProfiles,
        deleteGameProfile,
    }

    function addGameProfile(gameProfile) {
        setSavedGameProfiles([
            {...gameProfile, _id: uuid()},
            ...savedGameProfiles
        ])
    }

    function deleteGameProfile(id){
        const updatedSavedGameProfiles = savedGameProfiles.filter(savedGameProfile => savedGameProfile._id !== id)
        setSavedGameProfiles(updatedSavedGameProfiles)
    }
}