function saveLocally(key, data) {
  const jsonString = JSON.stringify(data)
  localStorage.setItem(key, jsonString)
}

function loadLocally(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
  }
}

function removeLocally(key) {
  localStorage.removeItem(key)
}

export { saveLocally, loadLocally, removeLocally }
