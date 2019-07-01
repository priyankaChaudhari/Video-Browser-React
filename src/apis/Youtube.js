import axios from 'axios';

const KEY = 'AIzaSyBJcHR9yOsjN4_bvFnwi9F1W5ECSzrBIvI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});