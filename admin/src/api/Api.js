import axios from 'axios'

const request = axios.create({
    baseURL: 'http://47.107.240.98:6767/api',
    headers: {
        Authorization: window.sessionStorage.getItem("token")
    },
    timeout: 10000
})

export default request