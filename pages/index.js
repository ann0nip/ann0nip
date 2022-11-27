import Switch from '@mui/material/Switch';
import { styled } from '@mui/material';
import Header from '../components/header/header.component';

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

export default function Home() {
    return (
        <Container>
            <Header />

            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
        </Container>
    );
}
