import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Typography variant="h2">Alpha Launch is live now!</Typography>
    } else {
        return <Typography variant="h1">{days}d {hours}h {minutes}m {seconds}s</Typography>;
    }
};

const LaunchTeaser = () => {
    const launchDate = new Date('2023-10-01T00:00:00');

    return (
        <Container maxWidth="md">
            <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" gutterBottom>
                        Get ready for MarketGPT
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        AI-powered market intelligence that transforms the way marketers work
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Alpha Launch Countdown
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Countdown date={launchDate} renderer={renderer} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center" color="text.secondary" paragraph>
                        MarketGPT provides in-depth insights from social media platforms, helps analyze customer engagement, understand audience interests and create effective marketing strategies. 
                        With AI-powered personalization at scale, transform your marketing now. 
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LaunchTeaser;
