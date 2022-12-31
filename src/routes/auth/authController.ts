import axios from "axios"

const login = async (data) => {
    return await axios.post('http://127.0.0.1:3002/security/check-password', data)
}

export {
    login
}
