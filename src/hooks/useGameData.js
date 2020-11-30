import {useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

const STORAGE_KEY = 'gameProfiles'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(loadLocally(STORAGE_KEY) ?? {
        byId: {},
        allIds: [],
    })
    
    useEffect(() => saveLocally(STORAGE_KEY, savedGameProfiles), [savedGameProfiles])

    const [isEditFormShown, setIsEditFormShown] = useState(false)
    const [targetProfile, setTargetProfile] = useState({})
    
    return {
        targetProfile, 
        savedGameProfiles, 
        isEditFormShown, 
        addGameProfile, 
        deleteGameProfile, 
        editGameProfile, 
        prepareEditModus, 
        cancelEditModus 
    }
    
    function addGameProfile(gameProfile) {
        const newId = uuid()
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [newId]: {...gameProfile, _id: newId},
            },
            allIds: [newId, ...savedGameProfiles.allIds],
        })
    }
    
    function deleteGameProfile(targetId){
        const copyOfById = {...savedGameProfiles.byId}
        delete copyOfById[targetId]
        setSavedGameProfiles({
            byId: copyOfById,
            allIds: savedGameProfiles.allIds.filter(id => id !== targetId),
        })
    }
    
    function editGameProfile(gameProfile){
        const targetId = gameProfile._id
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [targetId]: {...gameProfile},
            },
            allIds: [...savedGameProfiles.allIds],
        })
    }
    
    function prepareEditModus(targetId){
        setIsEditFormShown(true)
        setTargetProfile(savedGameProfiles.byId[targetId])
    }
    
    function cancelEditModus(){
        setIsEditFormShown(false)
    }
}