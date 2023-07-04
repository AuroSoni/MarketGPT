import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { pages } from "./consts";

const MainHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <CssBaseline />
                <Box sx={{ display: 'flex', justifyContent:"space-between", width:"100%"}}>
                    <Box sx={{ mr: 5, flexGrow: 1 }}>
                        <Button color="inherit" href="/">
                            <Typography variant="h6" component="div">
                                MarketGPT
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{}}>
                        {
                            pages.map((page) => (
                                <Button variant="text" disableGutters color="inherit" href={`/${page.url}`} key={page.id} sx={{ fontSize: 12 }}>
                                    {page.name}
                                </Button>
                            ))
                        }
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;