import {AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import {pages} from "./consts";
import {conversations} from "./consts";
import LaunchTeaser from "./LaunchTeaser";

const MainBody = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {
                pages.map((page)=>(
                <Route path={`/${page.url}`} element={<Page page={page}/>} key={page.id}/>
                ))
            }
        </Routes>
    );
};

const Home=()=>{
    return(
        <LaunchTeaser></LaunchTeaser>
    );
};

const createMarkup = (text) => {
    //return {__html: text.replace(/\r\n|\n/g, '<br />')};
    return {__html: text};
}

const Page = ({ page }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbxqqAiaURb4I0t0UUGFqgWOsZkTOgzNAFXsIRfvtZBmNWmiMdNsHGQoZKySpd6FYNWG/exec?sheet=${page.sheet}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log('Error:', error));
    }, []);

    return(
        <div>
            <Container maxWidth="xl" sx={{ marginTop: '5rem' }}>
                {data.map((item, index) => (
                    <Paper key={index} sx={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        alignSelf: item.type === 'Prompt' ? 'flex-end' : 'flex-start',
                        backgroundColor: item.type === 'Prompt' ? '#DCF8C6' : '#FFF',
                        maxWidth: '70%',
                        marginLeft: item.type === 'Prompt' ? 'auto' : '0',
                        marginRight: item.type === 'Prompt' ? '0' : 'auto',
                        borderRadius: '1rem' }}>
                        <Typography variant="subtitle1" color="textSecondary">{item.type}</Typography>
                        <Typography variant="body1" dangerouslySetInnerHTML={createMarkup(item.text)} />
                    </Paper>
                ))}
            </Container>
        </div>
    );
};

export default MainBody;