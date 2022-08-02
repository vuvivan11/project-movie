import axios from "axios"

const api = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/"
})

api.interceptors.request.use((config) => {
    config.headers = {
        TokenCyberSoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjA1LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDE5ODQwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcwMzQ2MDAwfQ.kdBVHpDWKZ-X7NZhWx-Y-ILozaT3RsvaQQF-Yqk4uV4",
        Authorization: localStorage.getItem("USER_LOGIN") ? `Bearer ${JSON.parse(localStorage.getItem("USER_LOGIN")).accessToken}` : ""
    }

    return config
})

export default api 