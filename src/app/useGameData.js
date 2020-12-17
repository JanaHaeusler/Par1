import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

const STORAGE_KEY = 'gameProfiles'

export default function useGameData() {

    const [savedGameProfiles, setSavedGameProfiles] = useState(loadLocally(STORAGE_KEY) ?? {
        byId: {},
        allIds: [],
    })
    const [targetProfile, setTargetProfile] = useState({})
    
    useEffect(() => saveLocally(STORAGE_KEY, savedGameProfiles), [savedGameProfiles])

    return {
        targetProfile, 
        savedGameProfiles, 
        createGameProfile, 
        addGameProfile,
        deleteGameProfile, 
        editGameProfile, 
        prepareEditModus, 
        prepareDetailsPage,
        updateTargetProfile,
    }
    
    function createGameProfile(keyInfos) {
        const newId = uuid()
        const playersArray = keyInfos.playersString.split(',').map((player) => player.trim()).filter(player => player)
        const playersString = playersArray.join(', ')
        const playerScores = playersArray.reduce((acc, cur) => (
                { ...acc, [cur]: { 
                                    hole1: '',
                                    hole2: '',
                                    hole3: '',
                                    hole4: '',
                                    hole5: '',
                                    hole6: '',
                                    hole7: '',
                                    hole8: '',
                                    hole9: '',
                                    hole10: '',
                                    hole11: '',
                                    hole12: '',
                                    hole13: '',
                                    hole14: '',
                                    hole15: '',
                                    hole16: '',
                                    hole17: '',
                                    hole18: '',
                                } 
                }), 
            {})
        setTargetProfile({
            ...keyInfos,
            playersString,
            playersArray,
            scores: playerScores,
            _id: newId
        })
    }

    function addGameProfile(newGameProfile) {
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [newGameProfile._id]: {...newGameProfile},
            },
            allIds: [newGameProfile._id, ...savedGameProfiles.allIds],
        })
        setTargetProfile({})
    }
    
    function deleteGameProfile(targetId) {
        const copyOfById = {...savedGameProfiles.byId}
        delete copyOfById[targetId]
        setSavedGameProfiles({
            byId: copyOfById,
            allIds: savedGameProfiles.allIds.filter(id => id !== targetId),
        })
    }
    
    function prepareEditModus(targetId) {
        setTargetProfile(savedGameProfiles.byId[targetId])
    }

    function updateTargetProfile(editedTargetProfile) {
        const playersArray = editedTargetProfile.playersString.split(',').map((player) => player.trim()).filter(player => player)
        const playersString = playersArray.join(', ')
        setTargetProfile({
            ...editedTargetProfile,
            playersString,
            playersArray,
        })
    }
    
    function editGameProfile(targetProfile) {
        const targetId = targetProfile._id
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [targetId]: {...targetProfile},
            },
            allIds: [...savedGameProfiles.allIds],
        })
        setTargetProfile({})
    }
    
    function prepareDetailsPage(targetId) {
        setTargetProfile(savedGameProfiles.byId[targetId])
    }

}