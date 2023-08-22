import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { pages } from "./consts";

const MainHeader = () => {
    return (
        <AppBar position="fixed">
            <Toolbar disableGutters>
                <CssBaseline />
                <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
                    <Box sx={{ mr: 5, flexGrow: 1 }}>
                        <Button color="inherit" href="/">
                            <Box sx={{ mr: 5, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Typography variant="h5" component="div">
                                    Hyperlocology
                                </Typography>
                                <Typography variant="subtitle2" component="div" sx={{ fontFamily: 'cursive' }}>
                                    Powered by MarketGPT
                                </Typography>
                            </Box>
                        </Button>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {
                            pages.map((page) => (
                                <Button variant="text" color="inherit" href={`/${page.url}`} key={page.id} sx={{ fontSize: 12 }}>
                                    {page.name}
                                </Button>
                            ))
                        }
                    </Box>
                    <Button variant="text" color="inherit" href={"/chat"} sx={{ fontSize: 12 }}>
                        <b>Chat</b>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;
