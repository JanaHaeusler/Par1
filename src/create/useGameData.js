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

    const [newGameProfile, setNewGameProfile] = useState({})



    
    const [isEditFormShown, setIsEditFormShown] = useState(false)
    const [targetProfile, setTargetProfile] = useState({})
console.log({newGameProfile})
    return {
        targetProfile, 
        savedGameProfiles, 
        isEditFormShown, 
        newGameProfile,
        addGameProfile,
        createGameProfile, 
        deleteGameProfile, 
        editGameProfile, 
        prepareEditModus, 
        cancelEditModus,
        prepareGameDetails 
    }
    
    function createGameProfile(gameInfo) {
        const playersArray = gameInfo.players.split(',').map((player) => player.trim()).filter(player => player)
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
        const newId = uuid()
        setNewGameProfile({
            ...gameInfo,
            players: playersArray,
            scores: playerScores,
            _id: newId
        })
        
    }

    function addGameProfile(scoreCardInfo) {
        setSavedGameProfiles({
            byId: {
                ...savedGameProfiles.byId,
                [scoreCardInfo._id]: {...scoreCardInfo},
            },
            allIds: [scoreCardInfo._id, ...savedGameProfiles.allIds],
        })
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

    function prepareGameDetails(targetId) {
        setTargetProfile(savedGameProfiles.byId[targetId])
    }
}