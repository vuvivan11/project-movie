import axios from "axios"

const api = axios.create({
    baseURL:"https://movienew.cybersoft.edu.vn/api/"
})

api.interceptors.request.use((config)=>{
    config.headers = {
        TokenCyberSoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
        Authorization:localStorage.getItem("USER_LOGIN")?  `Bearer ${JSON.parse(localStorage.getItem("USER_LOGIN")).accessToken}` : ""
    }
    return config
})

export default api