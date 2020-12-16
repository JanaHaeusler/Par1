import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

const STORAGE_KEY = 'gameProfiles'

export default function useGameData() {

    const [newGameProfile, setNewGameProfile] = useState({})
    const [savedGameProfiles, setSavedGameProfiles] = useState(loadLocally(STORAGE_KEY) ?? {
        byId: {},
        allIds: [],
    })
    const [targetProfile, setTargetProfile] = useState({})
    const [isEditFormShown, setIsEditFormShown] = useState(false)
    
    useEffect(() => saveLocally(STORAGE_KEY, savedGameProfiles), [savedGameProfiles])

    return {
        targetProfile, 
        savedGameProfiles, 
        isEditFormShown, 
        newGameProfile,
        createGameProfile, 
        addGameProfile,
        deleteGameProfile, 
        editGameProfile, 
        prepareEditModus, 
        cancelEditModus,
        prepareDetailsPage,
        updateTargetProfile,
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

    function prepareDetailsPage(targetId) {
        setTargetProfile(savedGameProfiles.byId[targetId])
    }

    function updateTargetProfile(gameInfo, targetProfile) {
        setTargetProfile({
            ...targetProfile,
            location: gameInfo.location,
            date: gameInfo.date,
            players: gameInfo.players,
            winner: gameInfo.winner,
            shots: gameInfo.shots,
        })
    }
}