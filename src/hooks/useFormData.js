import {useState} from 'react'
import { v4 as uuid } from 'uuid'

export default function useFormData() {
    
    const [savedGameProfiles, setSavedGameProfiles] = useState([])
    
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