import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
     const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then((res) => {
            const fetchedData = res.data.map(item => ({
              Name: item.title,
              Price: '${item.price} $',
              Category: item.category,
              Image: item.image
            }));
            setData(fetchedData);
          })
          .catch((error) => {
            console.error("There was an error fetching the products!", error);
          });
    }, []);
    return (
        <div style={{ display: 'flex', justifyContent: 'center',background:('darkseagreen') }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'pink',minWidth:'350px'}}>
                {data.map((row, index) => (
                    <ListItem alignItems="flex-start" key={index}sx={{ border: '1px solid grey', borderRadius: '8px', marginBottom: '8px',padding:'40px' }}
                    >
                        <ListItemAvatar>
                            <Avatar  alt={row.Name} src={row.Image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={row.Name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {row.Price}
                                    </Typography>
                                    <br />
                                
                                    {'('+ row.Category +')'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Home;