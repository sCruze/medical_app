const production = true

const request = async (url, method = 'GET', mode = 'cors', body = null, headers = {}) => {
    let baseURI = 'http://localhost:3000/api/'

    if (production) {
        baseURI = 'http://127.0.0.1:8000/api/'
    }

    try {

        const response = await fetch(`${baseURI}${url}`, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong')
        }

        return data
    } catch (err) {
        throw new Error(err)
    }
}

export default request
