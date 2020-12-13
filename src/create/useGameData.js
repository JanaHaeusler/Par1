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
    console.log('savedGameProfiles', savedGameProfiles)
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
        console.log('ADD GAME PROFILE - GAME PROFILE', gameProfile)
        const playersArray = gameProfile.players.split(',').map((player) => player.trim()).filter(player => player)
        
        console.log('ADD GAME PROFILE - playersArray', playersArray)
        
        
        const playersObject = playersArray.reduce((acc, cur) => ({ ...acc, [cur]: {} }), {})
        console.log('ADD GAME PROFILE - playersObject', playersObject)

        const newId = uuid()
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [newId]: {...gameProfile, 
                    players: {
                        byName: playersObject,
                        allNames: playersArray
                    },
                    _id: newId},
            },
            allIds: [newId, ...savedGameProfiles.allIds],
        })
        setTargetProfile({
            ...gameProfile, 
            players: {
                byName: playersObject,
                allNames: playersArray
            },
            _id: newId})
    }
    
    function deleteGameProfile(targetId) {
        const copyOfById = {...savedGameProfiles.byId}
        delete copyOfById[targetId]
        setSavedGameProfiles({
            byId: copyOfById,
            allIds: savedGameProfiles.allIds.filter(id => id !== targetId),
        })
    }
    
    function editGameProfile(gameProfile) {
        const targetId = gameProfile._id
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [targetId]: {...gameProfile},
            },
            allIds: [...savedGameProfiles.allIds],
        })
    }
    
    function prepareEditModus(targetId) {
        setIsEditFormShown(true)
        setTargetProfile(savedGameProfiles.byId[targetId])
    }
    
    function cancelEditModus() {
        setIsEditFormShown(false)
    }
}