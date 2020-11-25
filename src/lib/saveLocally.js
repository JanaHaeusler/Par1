export default function SaveLocally(key, data) {
    const jsonString = JSON.stringify(data)
    localStorage.setItem(key, jsonString)
}