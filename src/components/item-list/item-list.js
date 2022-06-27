import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './item-list.scss';

const ItemList = ({ baseListOfItems, numberToDisplay }) => {

    const renderListItem = (itemText, idx) => {
        return (
            <ListItem disablePadding key={idx}>
                <ListItemButton>
                <ListItemText primary={itemText} />
                </ListItemButton>
            </ListItem>
        );
    }

    return (
    // <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <Box className="item-list-container">
      <nav aria-label="main mailbox folders">
        <List>
            {baseListOfItems.length && baseListOfItems.map((item, idx) => 
                idx < numberToDisplay ? renderListItem(item, idx) : null
            )}
        </List>
      </nav>
    </Box>
  );
}

export default ItemList;
