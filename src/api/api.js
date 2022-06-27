
import axios from 'axios';
import { BASE_APPLE_API_URL } from '../constants/api-constants';

const SearchAPICall = async (searchTerm) => {
    return await axios.get(BASE_APPLE_API_URL + searchTerm, {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'text/html; charset=UTF-8',
            }
        })
        .then(res => {
            if(!res.data.results.length) {
                return;
            }
    
            const songs = res.data.results.map(c => c.collectionName);
    
            if (songs) {
                songs.sort((a, b) => a.localeCompare(b));
                console.log('Full song list alphabetically sorted', songs);
                return songs.slice(0, 5)
            }
        })  
        .catch(err => {
            console.error('error: ', err);
        })
}

export default SearchAPICall;