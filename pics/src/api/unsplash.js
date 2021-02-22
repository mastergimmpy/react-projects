import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OzPjI_p8_F4egOstGBLtr4mly-f2nEeaDeB21Z-nBEk'
  }
})
