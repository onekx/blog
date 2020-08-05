import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:6767/api',
    headers: {
        Authorization: window.sessionStorage.getItem("token")
    },
    timeout: 10000
})

export default request