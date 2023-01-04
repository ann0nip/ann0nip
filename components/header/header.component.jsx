import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

const pages = [
    // { title: 'Ask Me Anything', url: 'ask-me-anything' },
    { title: 'Cripto Calc', url: 'cripto-calc' },
    // { title: 'Links', url: 'links' },
];

export const HeaderLink = styled(Link)(({ theme }) => {
    const { getContrastText, primary } = theme.palette;
    return {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: getContrastText(primary.main),
        display: 'block',
        margin: '0 10px',
        padding: '10px',
        '&:hover': {
            backgroundColor: primary.light,
        },
    };
});

function Header() {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClickNavMenu = (href) => {
        router.push(href);
    };

    return (
        <AppBar position="sticky" elevation={0} sx={{ opacity: '0.98' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Start Desktop view */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ANN0NIP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'end',
                        }}
                    >
                        {pages.map((page) => (
                            <HeaderLink key={page.url} href={page.url}>
                                {page.title}
                            </HeaderLink>
                        ))}
                    </Box>

                    {/* End Desktop view */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ANN0NIP
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'end',
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="menu list"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            MenuListProps={{
                                style: { padding: 0, backgroundColor: '#FFF' },
                            }}
                            id="menu-appbar"
                            keepMounted
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                top: 5,
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.url}
                                    onClick={() => handleClickNavMenu(page.url)}
                                    sx={{}}
                                >
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
