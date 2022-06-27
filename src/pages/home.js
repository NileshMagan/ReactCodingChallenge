import { useEffect, useState } from 'react';
import { Box, Typography} from '@mui/material';
import { DEFAULT_LIST_ITEMS, NUMBER_OF_ITEMS } from '../constants/item-list-consants';
import InputText from '../components/input-text/input-text';
import ItemList from '../components/item-list/item-list';
import SearchAPICall from '../api/api';

import './home.scss';

const Home = () => {
    const [listItems, setListItems] = useState(DEFAULT_LIST_ITEMS);
    const [songList, setSongList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [timer, setTimer] = useState(null);
    
    useEffect(() => { // Set timer up to rotate list
        if (timer === null) {
            setTimer(setInterval(() => rotateList(), 1000));
        }
        
        return () => {
            clearTimeout(timer);  
        }
    }, [timer]);

    useEffect(() => { // Call async api for data
        callApi();  
    }, [searchTerm]);

    const callApi = async () => { // Call api and write to state
        console.log('Search Term', searchTerm);

        const results = await SearchAPICall(searchTerm);
        console.log('results', results);
        setSongList(results);
    };

    const rotateList = () => { // Rotate item list
        setListItems((oldItemList) => {
            const itemList = [...oldItemList];
            const firstElement = itemList.shift();
            
            setSongList((oldSongList) => {
                if (itemList !== oldSongList && oldSongList && oldSongList.length) {
                    itemList.push(oldSongList[0]);
                    return oldSongList.slice(1, oldSongList.length);
                } else if (itemList.length !== NUMBER_OF_ITEMS) {
                    itemList.push(firstElement);
                }
            })

            return itemList;
        });
    }

    return (
    <Box className="home-page">
        <Box className="home-container">
            <Box className="home-contents">
                <Typography variant="h3" component="div" gutterBottom>Ticentis task</Typography>
                <InputText setSearchTerm={(e) => setSearchTerm(e)} />
                <ItemList baseListOfItems={listItems} numberToDisplay={NUMBER_OF_ITEMS} />
            </Box>
        </Box>
    </Box>
  );
}

export default Home;
  