import { Box, Grid, MenuItem, Typography, styled } from '@mui/material';
import Image from 'next/image';

import Header from '../components/header/header.component';
import ImageLanding from '../styles/assets/IMG_2855.png';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Container = styled('div')(({ theme }) => {
    const { secondary, background } = theme.palette;

    return {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: background,
    };
});

export const Landing = () => {
    return (
        <Box>
            <Grid container sx={{ paddingX: { xs: '0rem', md: '6rem' } }}>
                <Grid
                    xs={12}
                    md={6}
                    sx={{
                        padding: { xs: '2rem', md: '6rem' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h4"
                        color="secondary.dark"
                        marginBottom="1rem"
                        sx={{
                            fontWeight: 600,
                            fontSize: '3rem',
                            textAlign: { xs: 'center' },
                        }}
                    >
                        Hi there 👋
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        I'm Juan Martin Gimenez, a passionate individual who
                        currently works as a Front-end developer.
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        I fell in love with technology, programming, and
                        business. I still don't know my destiny in life,
                        although I pursue it, or so I think 🧭
                    </Typography>
                    <Typography
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        My field of Interest's are building web products with
                        Modern Javascript Library and Frameworks. Crypto
                        Enthusiastic, Life curious learner, traveler.
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image src={ImageLanding} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default function Home() {
    return (
        <Container>
            <Header />
            <Landing />
        </Container>
    );
}
