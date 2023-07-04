import {AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {pages} from "./consts";
import {conversations} from "./consts";

const MainBody = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {
                pages.map((page)=>(
                <Route path={`/${page.url}`} element={<Page meta={page}/>} key={page.id}/>
                ))
            }
        </Routes>
    );
};

const Home=()=>{
    return(
        <div>Hi</div>
    );
};

const Page = (meta) => {
    return(
        <div>
            <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
                {conversations.map((conv) => (
                    <Box id={conv.id} key={conv.id} sx={{ marginBottom: '2rem' }}>
                        {conv.prompts.map((prompt, index) => (
                            <Paper key={index} sx={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                alignSelf: 'flex-end',
                                backgroundColor: '#DCF8C6',
                                maxWidth: '70%',
                                marginLeft: 'auto',
                                borderRadius: '1rem' }}>
                                <Typography variant="subtitle1" color="textSecondary">Prompt</Typography>
                                <Typography variant="body1">{prompt}</Typography>
                            </Paper>
                        ))}
                        {conv.responses.map((response, index) => (
                            <Paper key={index} sx={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                alignSelf: 'flex-start',
                                maxWidth: '70%',
                                marginRight: 'auto',
                                borderRadius: '1rem' }}>
                                <Typography variant="subtitle1" color="textSecondary">Response</Typography>
                                <Typography variant="body1">{response}</Typography>
                            </Paper>
                        ))}
                    </Box>
                ))}
            </Container>
        </div>
    );
};

export default MainBody;