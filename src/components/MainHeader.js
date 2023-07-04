import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { pages } from "./consts";

const MainHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <CssBaseline />
                <Container sx={{ display: 'flex' }}>
                    <Box sx={{ mr: 5, flexGrow: 1 }}>
                        <Button color="inherit" href="/">
                            <Typography variant="h6" component="div">
                                MarketGPT
                            </Typography>
                        </Button>
                    </Box>
                    <Box justifyContent={"flex-end"} sx={{display:"inline-flex"}}>
                        {
                            pages.map((page) => (
                                <Button variant="text" disableGutters color="inherit" href={`/${page.url}`} key={page.id} sx={{ fontSize: 12 }}>
                                    {page.name}
                                </Button>
                            ))
                        }
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;