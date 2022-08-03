import axios from "axios"

const apiHome = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/"
})

apiHome.interceptors.request.use((config) => {
    config.headers = {
        TokenCyberSoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjA1LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDE5ODQwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcwMzQ2MDAwfQ.kdBVHpDWKZ-X7NZhWx-Y-ILozaT3RsvaQQF-Yqk4uV4",
        Authorization: localStorage.getItem("USER_LOGIN") ? `Bearer ${JSON.parse(localStorage.getItem("USER_LOGIN")).accessToken}` : ""
    }

    return config
})

const apiAdmin = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/"
})

apiAdmin.interceptors.request.use((config) => {
    config.headers = {
        TokenCyberSoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjA1LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDE5ODQwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcwMzQ2MDAwfQ.kdBVHpDWKZ-X7NZhWx-Y-ILozaT3RsvaQQF-Yqk4uV4",
        Authorization: localStorage.getItem("ADMIN_LOGIN") ? `Bearer ${JSON.parse(localStorage.getItem("ADMIN_LOGIN")).accessToken}` : ""
    }

    return config
})

export { apiHome, apiAdmin } 