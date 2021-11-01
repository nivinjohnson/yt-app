import axios from 'axios';

const KEY = 'AIzaSyA19l1kiq4CjqF9GBGOlRDc1DOL1mtIUN4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});