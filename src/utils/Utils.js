export const timeFormat = (seconds) => {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
        return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
}

export const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ]
    }

    return array
}

const pad = (string) => {
    return ('0' + string).slice(-2)
}
