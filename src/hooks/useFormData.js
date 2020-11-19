import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useFormData() {
  const [savedGameProfiles, setSavedGameProfiles] = useState([])

  function addGameProfile(gameProfile) {
    setSavedGameProfiles([
      { ...gameProfile, _id: uuid() },
      ...savedGameProfiles,
    ])
  }

  return {
    savedGameProfiles,
    setSavedGameProfiles,
    addGameProfile,
  }
}
