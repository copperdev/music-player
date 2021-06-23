export const getLyrics = async (track) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.textyl.co/api/lyrics?q=${track}`
    try {
        const request = await fetch(url, { "method": "GET" })
        const response = await request.json()
        return response
    } catch (err) {
        return err
    }
}
