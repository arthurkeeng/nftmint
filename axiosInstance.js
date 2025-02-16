

import axios from 'axios'
const app = axios.create({
    // baseURL: 'https://olearningcenter.onrender.com',
    baseURL: 'http://localhost:4000',

})

export default app