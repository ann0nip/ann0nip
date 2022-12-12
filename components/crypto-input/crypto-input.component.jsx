import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import {
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    styled,
} from '@mui/material';

const BitcoinIcon = styled(CurrencyBitcoinIcon)((props) => {
    return {
        color: props.theme.palette.primary.dark,
    };
});
const CryptoInput = ({ value, handleChange }) => (
    <FormControl
        sx={{
            paddingX: '1rem',
            marginBottom: '1rem',
        }}
        fullWidth
        variant="standard"
    >
        <InputLabel htmlFor="standard-adornment-amount">
            Cantidad a vender
        </InputLabel>
        <Input
            value={value}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    <BitcoinIcon />
                </InputAdornment>
            }
        />
    </FormControl>
);

export default CryptoInput;
