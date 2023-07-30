import React, { useState } from 'react';
import { TextField, IconButton, Container, Paper, Typography, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

const Chat = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('prompt', text);
        setData((prevData) => [
            ...prevData,
            { type: 'Prompt', text: text },
        ]);
        setText('');

        const response = await fetch('https://proto2.fly.dev/chat/amazon_sales_basic/', {
            method: 'POST',
            body: formData,
        });
        const body = await response.json();
        console.log(body);
        // Update data state using the setData callback function
        setData((prevData) => [
            ...prevData,
            { type: 'Response', text: body },
        ]);

        setLoading(false);
    }

    return (
        <Grid container direction="column" style={{height: "100vh", alignItems:"center"}}>
            <Grid item style={{overflow: 'auto', marginBottom: "75px", width: '80%'}}>
                <Container maxWidth="xl" sx={{ marginTop: '5rem' }}>
                    <Box>
                        {data.map((item, index) => (
                            <Paper key={index} sx={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                alignSelf: item.type === 'Prompt' ? 'flex-end' : 'flex-start',
                                backgroundColor: item.type === 'Prompt' ? '#DCF8C6' : '#FFF',
                                maxWidth: '70%',
                                marginLeft: item.type === 'Prompt' ? 'auto' : '0',
                                marginRight: item.type === 'Prompt' ? '0' : 'auto',
                                borderRadius: '1rem'
                            }}>
                                <Typography variant="subtitle1" color="textSecondary">{item.type}</Typography>
                                <Typography variant="body1" dangerouslySetInnerHTML={{__html: item.text}} />
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Grid>
            <Grid item style={{position: 'fixed', bottom: 10, width: '80%'}}>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Write a Prompt..."
                            id="fullWidth"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton type="submit" disabled={loading}>
                                        {loading ? <CircularProgress /> : <SendIcon />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Chat;
