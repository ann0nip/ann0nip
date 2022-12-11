import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';

import Header from '../components/header/header.component';
import memojiHey from '../styles/assets/image_2854.png';
import memojiComputer from '../styles/assets/image_2855.png';
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
        <Container sx={{ paddingX: { xs: '0rem', md: '6rem' } }}>
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
                        }}
                    >
                        <Grid
                            container
                            sx={{ justifyContent: 'space-between' }}
                        >
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    marginLeft: '-2rem',
                                }}
                            >
                                <Image
                                    src={memojiHey}
                                    width="160"
                                    alt="Memoji Salute"
                                    priority
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    color={'primary.dark'}
                                    gutterBottom
                                >
                                    FIND ME ON
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <a href="https://www.linkedin.com/in/ann0nip">
                                        <LinkedInIcon
                                            sx={{
                                                transform: 'scale(1.5)',
                                                fill: '#0077B5',
                                            }}
                                        />
                                    </a>
                                    <a href="https://www.github.com/ann0nip">
                                        {' '}
                                        <GitHubIcon
                                            sx={{
                                                transform: 'scale(1.5)',
                                                fill: '#333',
                                            }}
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/ann0nip">
                                        <InstagramIcon
                                            sx={{
                                                transform: 'scale(1.5)',
                                                fill: '#E1306C',
                                            }}
                                        />
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>

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
                        I&apos;m Juan Martin Gimenez, a passionate individual
                        who works as a Front-end developer.
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
                        business.
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
                        My field of interest is building web products with
                        Modern Javascript Library and Frameworks.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        Crypto Enthusiastic · Life Curious Learner · Traveler.
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
        </Container>
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
