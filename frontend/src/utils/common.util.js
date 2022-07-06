export const API_URL = 'http://localhost:4008/api';
export const post = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

export const get = () => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
}