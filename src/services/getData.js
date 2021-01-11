export const getData = async (URL) => {
    const res = await fetch(URL)

    if (!res) {
        throw Error('Error log ' + res.status)
    }

    return await res.json()
}
