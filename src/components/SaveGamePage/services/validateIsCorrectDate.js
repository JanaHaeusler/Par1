export default function validateIsCorrectDate(date) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    return (date?.trim() !== '' && date.match(regEx))
}