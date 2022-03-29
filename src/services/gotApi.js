import axios from "axios";

const gotApi = axios.create({
    baseURL:'https://anapioficeandfire.com/api'
})

export default gotApi;