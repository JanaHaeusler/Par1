import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { saveLocally, loadLocally } from '../lib/localStorage'

const STORAGE_KEY = 'gameProfiles'

export default function useGameData() {
  const [savedGameProfiles, setSavedGameProfiles] = useState(
    loadLocally(STORAGE_KEY) ?? {
      byId: {},
      allIds: [],
    }
  )
  const [newGameProfile, setNewGameProfile] = useState({})
  const [targetProfile, setTargetProfile] = useState({})

  useEffect(() => saveLocally(STORAGE_KEY, savedGameProfiles), [
    savedGameProfiles,
  ])

  return {
    newGameProfile,
    targetProfile,
    savedGameProfiles,
    createGameProfile,
    addGameProfile,
    deleteGameProfile,
    editGameProfile,
    prepareEditPage,
    prepareDetailsPage,
    updateTargetProfile,
  }

  function createGameProfile(keyInfos) {
    const newId = uuid()
    const playersArray = keyInfos.players
      .split(',')
      .map((player) => player.trim())
      .filter((player) => player)
    const playersString = playersArray.join(', ')
    const playerScores = playersArray.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: {
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
        },
      }),
      {}
    )
    setNewGameProfile({
      location: keyInfos.location,
      date: keyInfos.date,
      winner: keyInfos.winner,
      shots: keyInfos.shots,
      playersString,
      playersArray,
      scores: playerScores,
      _id: newId,
    })
  }

  function addGameProfile(newGameProfile) {
    setSavedGameProfiles({
      byId: {
        ...savedGameProfiles.byId,
        [newGameProfile._id]: { ...newGameProfile },
      },
      allIds: [newGameProfile._id, ...savedGameProfiles.allIds],
    })
    setTargetProfile(null)
  }

  function deleteGameProfile(targetId) {
    const copyOfById = { ...savedGameProfiles.byId }
    delete copyOfById[targetId]
    setSavedGameProfiles({
      byId: copyOfById,
      allIds: savedGameProfiles.allIds.filter((id) => id !== targetId),
    })
  }

  function prepareEditPage(targetId) {
    setTargetProfile(savedGameProfiles.byId[targetId])
  }

  function updateTargetProfile(editedGameInfos, targetProfile) {
    setTargetProfile({
      ...targetProfile,
      location: editedGameInfos.location,
      date: editedGameInfos.date,
      playersString: editedGameInfos.players,
      winner: editedGameInfos.winner,
      shots: editedGameInfos.shots,
    })
  }

  function editGameProfile(targetProfile) {
    const targetId = targetProfile._id
    setSavedGameProfiles({
      byId: {
        ...savedGameProfiles.byId,
        [targetId]: { ...targetProfile },
      },
      allIds: [...savedGameProfiles.allIds],
    })
    setTargetProfile({})
  }

  function prepareDetailsPage(targetId) {
    setTargetProfile(savedGameProfiles.byId[targetId])
  }
}
