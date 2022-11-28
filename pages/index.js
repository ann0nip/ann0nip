import {
    Box,
    Divider,
    Grid,
    MenuItem,
    Typography,
    styled,
} from '@mui/material';
import Image from 'next/image';

import Header from '../components/header/header.component';
import memojiHey from '../styles/assets/IMG_2854.png';
import memojiComputer from '../styles/assets/IMG_2855.png';
import greenStain from '../styles/assets/splat.svg';

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
        <Box sx={{ paddingX: { xs: '0rem', md: '6rem' } }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        padding: { xs: '0 2rem', md: '6rem' },
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
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        Hi there 👋
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            marginLeft: '-2rem',
                        }}
                    >
                        <Image
                            src={memojiHey}
                            width="160"
                            alt="Memoji Salute"
                            priority
                        />
                        <Divider sx={{ margin: { xs: '-5px 0 0 -2rem' } }} />
                    </Box>
                    <Typography
                        gutterBottom
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            marginTop: { xs: '1rem' },
                        }}
                    >
                        I'm Juan Martin Gimenez, a passionate individual who
                        works as a Front-end developer.
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
                        business. However, I'm still looking for new challenges
                        🧭
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
                        My field of Interest's building web products with Modern
                        Javascript Library and Frameworks.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        Crypto Enthusiastic, Life curious learner, traveler.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: `url(${greenStain.src})`,
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Image
                        src={memojiComputer}
                        alt="Memoji Computer"
                        priority
                    />
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
