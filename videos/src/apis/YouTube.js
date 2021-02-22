import axios from 'axios'
const KEY = 'AIzaSyAMFtmpGmFSxJM4ohvU2yxRNDNWIm-PimA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
